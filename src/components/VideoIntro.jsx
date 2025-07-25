import { useEffect, useRef } from "react";

export default function VideoIntro({ onEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Attempt to play video with safety for autoplay restrictions
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
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center w-full h-[100dvh] sm:h-screen">
      <video
        ref={videoRef}
        className="w-screen h-screen object-cover"
        muted
        autoPlay
        playsInline
        preload="auto"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={onEnd}
        className="absolute bottom-[env(safe-area-inset-bottom,2rem)] right-[env(safe-area-inset-right,2rem)] px-5 py-2 text-sm bg-white/80 hover:bg-white text-black rounded-lg backdrop-blur-md transition duration-300"
        aria-label="Skip intro video"
      >
        Skip
      </button>
    </div>
  );
}

