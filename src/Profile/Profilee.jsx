import { createElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePortfolio } from "../data/PortfolioContext";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Profile = () => {
  const { about } = usePortfolio();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [activePage, setActivePage] = useState("education");
  const isEducation = activePage === "education";
  const entries = isEducation ? about.education : about.experience;
  const pageTitle = isEducation ? about.educationTitle : about.experienceTitle;
  const flipPage = (page) => setActivePage(page);

  return (
    <section
      ref={ref}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16"
    >
      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 rounded-2xl border p-6 sm:p-8 lg:p-12 bg-white/25 dark:bg-[#161621]/25 border-[#D1FAE5] dark:border-[#2E2E3A] shadow-[0_10px_30px_rgba(16,185,129,0.08)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 z-10">
          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] dark:text-[#F5F3FF] leading-tight"
          >
            {about.title}
          </motion.h1>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#0F172A] dark:text-[#F5F3FF]"
          >
            {about.heading}
          </motion.div>
          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="text-base sm:text-lg leading-relaxed text-[#334155] dark:text-[#D4D4D8] max-w-xl"
          >
            {about.description}
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 min-w-0 z-10">
          <div className="profile-book" aria-label="Education and experience book">
            <div className="profile-book-spiral" aria-hidden="true">
              {Array.from({ length: 10 }, (_, index) => <span key={index} />)}
            </div>
            <div className="profile-book-page">
              <div className="profile-book-tabs" role="tablist" aria-label="Profile pages">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isEducation}
                  className={isEducation ? "active" : ""}
                  onClick={() => flipPage("education")}
                >
                  {about.educationTitle}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={!isEducation}
                  className={!isEducation ? "active" : ""}
                  onClick={() => flipPage("experience")}
                >
                  {about.experienceTitle}
                </button>
              </div>

              <div className="profile-book-page-window" style={{ perspective: "1100px" }}>
                <AnimatePresence mode="wait" initial={false}>
                  {createElement(
                    motion.article,
                    {
                      key: activePage,
                      className: "profile-book-sheet",
                      role: "tabpanel",
                      initial: { opacity: 0, rotateY: -82, x: 28 },
                      animate: { opacity: 1, rotateY: 0, x: 0 },
                      exit: { opacity: 0, rotateY: 82, x: 24 },
                      transition: { duration: 0.58, ease: [0.22, 0.68, 0, 1] },
                      style: { transformOrigin: "left center", transformStyle: "preserve-3d" },
                    },
                    <>
                      <h3>{pageTitle}</h3>
                      <div className="profile-book-entries">
                        {entries.length ? entries.map((entry, index) => (
                          <div className="profile-book-entry" key={`${entry.period}-${index}`}>
                            <span>{entry.period}</span>
                            <p>{entry.detail}</p>
                          </div>
                        )) : <p className="profile-book-empty">Add {activePage} details in the dashboard.</p>}
                      </div>
                      <div className="profile-book-page-number">{isEducation ? "01" : "02"}</div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="profile-book-controls">
                <button
                  type="button"
                  aria-label="Previous book page"
                  onClick={() => flipPage("education")}
                  disabled={isEducation}
                >
                  <ChevronLeft size={17} /> Previous
                </button>
                <span>{isEducation ? "1" : "2"} / 2</span>
                <button
                  type="button"
                  aria-label="Next book page"
                  onClick={() => flipPage("experience")}
                  disabled={!isEducation}
                >
                  Next <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
