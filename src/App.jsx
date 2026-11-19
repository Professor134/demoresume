import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import BgBlur from "./components/BgBlur";
import SkillShowcase from "./Skill/SkillShowcase";
import Profile from "./Profile/Profilee";
import Contact from "./components/Contact";
import VideoIntro from "./components/VideoIntro";
import Footer from "./Hero/Footer";
import ProjectArea from "./Projectpage/ProjectArea";
import AdminPortal from "./admin/AdminPortal";
import { PortfolioContext } from "./data/PortfolioContext";
import { defaultPortfolio, mergePortfolio } from "./data/portfolio";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const PORTFOLIO_DRAFT_KEY = "portfolio-draft";
const PORTFOLIO_DRAFT_DATABASE = "portfolio-drafts";
const PORTFOLIO_DRAFT_STORE = "drafts";

function openPortfolioDraftDatabase() {
  if (!window.indexedDB) {
    return Promise.reject(new Error("This browser does not support persistent large drafts."));
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(PORTFOLIO_DRAFT_DATABASE, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(PORTFOLIO_DRAFT_STORE);
    };
    request.onerror = () => reject(request.error || new Error("Could not open browser draft storage."));
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
  });
}

async function readPortfolioDraft() {
  const database = await openPortfolioDraftDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(PORTFOLIO_DRAFT_STORE, "readonly");
    const request = transaction.objectStore(PORTFOLIO_DRAFT_STORE).get(PORTFOLIO_DRAFT_KEY);
    request.onsuccess = () => {
      database.close();
      resolve(request.result ?? null);
    };
    request.onerror = () => {
      database.close();
      reject(request.error || new Error("Could not read the saved portfolio draft."));
    };
  });
}

async function writePortfolioDraft(portfolio) {
  const database = await openPortfolioDraftDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(PORTFOLIO_DRAFT_STORE, "readwrite");
    transaction.objectStore(PORTFOLIO_DRAFT_STORE).put(portfolio, PORTFOLIO_DRAFT_KEY);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("Could not save the portfolio draft."));
    };
    transaction.onabort = () => {
      database.close();
      reject(transaction.error || new Error("Saving the portfolio draft was aborted."));
    };
  });
}

function ScrollBackgroundVideo({ src, opacity, speed }) {
  const videoRef = React.useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    let frame = 0;

    let targetTime = 0;
    const seekToScrollPosition = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
      const playbackSpeed = Math.min(3, Math.max(0.25, Number(speed) || 1));
      targetTime = Math.pow(progress, 1 / playbackSpeed) * video.duration;
      if (video.seeking || Math.abs(video.currentTime - targetTime) < 0.025) return;
      video.currentTime = targetTime;
    };

    const syncToScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(seekToScrollPosition);
    };

    video.pause();
    video.addEventListener("loadedmetadata", syncToScroll);
    video.addEventListener("seeked", syncToScroll);
    window.addEventListener("scroll", syncToScroll, { passive: true });
    window.addEventListener("resize", syncToScroll);
    syncToScroll();
    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", syncToScroll);
      video.removeEventListener("seeked", syncToScroll);
      window.removeEventListener("scroll", syncToScroll);
      window.removeEventListener("resize", syncToScroll);
    };
  }, [src, speed]);

  if (!src) return null;
  return (
    <video
      ref={videoRef}
      className="portfolio-scroll-video"
      src={src}
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      style={{ opacity: Math.min(0.65, Math.max(0, Number(opacity) || 0)) }}
    />
  );
}

function SectionBackground({ background }) {
  if (!background?.image && !background?.video) return null;
  const opacity = Math.min(0.85, Math.max(0, Number(background.opacity) || 0));
  return (
    <div className="portfolio-section-background" style={{ opacity }} aria-hidden="true">
      {background.video ? (
        <video src={background.video} autoPlay muted loop playsInline />
      ) : (
        <div style={{ backgroundImage: `url("${background.image}")` }} />
      )}
    </div>
  );
}

function PortfolioSection({ id, background, className = "", children }) {
  return (
    <section id={id} className={`portfolio-section ${className}`} style={{ position: "relative" }}>
      <SectionBackground background={background} />
      <div className="portfolio-section-content">{children}</div>
    </section>
  );
}

function App() {
  const [portfolio, setPortfolio] = useState(defaultPortfolio);
  const [showIntro, setShowIntro] = useState(defaultPortfolio.site.showIntro);
  const [adminOpen, setAdminOpen] = useState(false);
  const [draftError, setDraftError] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [draftEnabled, setDraftEnabled] = useState(false);

  useEffect(() => {
    let active = true;
    const hydratePortfolio = async () => {
      let savedDraft = null;
      try {
        savedDraft = await readPortfolioDraft();
      } catch (error) {
        if (active) setDraftError(`Could not read the saved draft: ${error.message}`);
      }

      if (!savedDraft) {
        try {
          const legacyDraft = localStorage.getItem(PORTFOLIO_DRAFT_KEY);
          if (legacyDraft) savedDraft = JSON.parse(legacyDraft);
        } catch (error) {
          if (active) setDraftError(`Could not read the saved draft: ${error.message}`);
        }
      }

      if (!active) return;
      if (savedDraft) {
        setPortfolio(mergePortfolio(savedDraft));
        setDraftEnabled(true);
        setHydrated(true);
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.BASE_URL}portfolio.json`);
        if (!response.ok) throw new Error(`Content file returned ${response.status}`);
        const content = await response.json();
        if (active) setPortfolio(mergePortfolio(content));
      } catch (error) {
        if (active) setDraftError(`Could not load portfolio.json; showing built-in content. ${error.message}`);
      } finally {
        if (active) setHydrated(true);
      }
    };

    hydratePortfolio();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated || !draftEnabled) return undefined;
    let active = true;
    writePortfolioDraft(portfolio)
      .then(() => {
        localStorage.removeItem(PORTFOLIO_DRAFT_KEY);
        if (active) setDraftError("");
      })
      .catch((error) => {
        if (active) setDraftError(`This browser could not save the draft: ${error.message}`);
      });

    return () => {
      active = false;
    };
  }, [draftEnabled, hydrated, portfolio]);

  useEffect(() => {
    document.title = portfolio.site.title || defaultPortfolio.site.title;
    document.documentElement.style.setProperty("--portfolio-accent-light", portfolio.site.accentLight || "#16a34a");
    document.documentElement.style.setProperty("--portfolio-accent-dark", portfolio.site.accentDark || "#7c3aed");
    Object.entries(portfolio.site.themeColors).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--portfolio-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value);
    });
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon && portfolio.site.logoLight) favicon.href = portfolio.site.logoLight;
  }, [portfolio.site.accentDark, portfolio.site.accentLight, portfolio.site.logoLight, portfolio.site.themeColors, portfolio.site.title]);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  const handlePortfolioChange = (nextPortfolio) => {
    setDraftEnabled(true);
    setPortfolio(nextPortfolio);
  };

  return (
      <ReactLenis root options={{ autoRaf: true, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.8, touchMultiplier: 1.35 }}>
        <PortfolioContext.Provider value={portfolio}>
          <div
            className={`portfolio-shell relative w-full min-h-screen ${adminOpen ? "" : "bg-[var(--bg-main)] text-[var(--text-main)]"} transition-colors duration-500`}
            style={adminOpen ? { backgroundColor: "#f5f7fb" } : undefined}
          >
            {!adminOpen && (
              <>
                <ScrollBackgroundVideo
                  src={portfolio.site.backgroundVideo}
                  opacity={portfolio.site.backgroundVideoOpacity}
                  speed={portfolio.site.backgroundVideoSpeed}
                />
                {portfolio.site.backgroundImage && (
                  <div className="portfolio-site-background" style={{ backgroundImage: `url("${portfolio.site.backgroundImage}")` }} />
                )}
              </>
            )}
            {adminOpen ? (
              <AdminPortal
                portfolio={portfolio}
                onChange={handlePortfolioChange}
                onClose={() => setAdminOpen(false)}
                draftError={draftError}
                hasLocalDraft={draftEnabled}
              />
            ) : showIntro && portfolio.site.showIntro ? (
              <VideoIntro onEnd={handleVideoEnd} src={portfolio.site.introVideo} />
            ) : (
              <>
                <BgBlur />
                <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-[var(--border)] w-full">
                  <Navbar onAdminOpen={() => setAdminOpen(true)} />
                </div>
                <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <PortfolioSection id="home" background={portfolio.site.sectionBackgrounds.home} className="pt-16 md:pt-24 pb-8"><Hero /></PortfolioSection>
                  <PortfolioSection id="profile" background={portfolio.site.sectionBackgrounds.profile} className="py-8 md:py-10"><Profile /></PortfolioSection>
                  <PortfolioSection id="skills" background={portfolio.site.sectionBackgrounds.skills} className="py-3 md:py-4"><SkillShowcase /></PortfolioSection>
                  <PortfolioSection id="projects" background={portfolio.site.sectionBackgrounds.projects} className="py-8 md:py-10"><ProjectArea /></PortfolioSection>
                  <PortfolioSection id="contact" background={portfolio.site.sectionBackgrounds.contact} className="py-8 md:py-10"><Contact /></PortfolioSection>
                  <PortfolioSection id="footer" background={portfolio.site.sectionBackgrounds.footer} className="pt-8 pb-4"><Footer /></PortfolioSection>
                </main>
              </>
            )}
          </div>
        </PortfolioContext.Provider>
      </ReactLenis>
  );
}

export default App;