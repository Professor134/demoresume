import { useEffect, useRef } from "react";

export default function VideoIntro({ onEnd, src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const tryPlay = async () => {
        try {
          await video.play();
        } catch (err) {
          console.error("Autoplay failed:", err);
        }
      };

      tryPlay();
      video.addEventListener("ended", onEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", onEnd);
      }
    };
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-main)] flex items-center justify-center w-full h-[100dvh] overflow-hidden">

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        autoPlay
        playsInline
        preload="auto"
      >
        <source src={src || "/ayo.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Overlay Tint for Theme Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--primary)]/10 pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={onEnd}
        aria-label="Skip intro video"
        className="
          absolute
          bottom-6 right-6
          sm:bottom-8 sm:right-8
          px-4 py-2
          sm:px-6 sm:py-3
          text-xs sm:text-sm
          font-medium
          rounded-full
          bg-[var(--card-bg)]
          text-[var(--text-main)]
          border border-[var(--border)]
          shadow-lg
          backdrop-blur-md
          transition-all duration-300
          hover:bg-[var(--primary)]
          hover:text-white
          hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]
        "
      >
        Skip Intro
      </button>
    </div>
  );
}