let activeFrame = 0;
let cancelActiveScroll = null;

export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  cancelActiveScroll?.();
  const start = window.scrollY;
  const destination = Math.max(0, window.scrollY + section.getBoundingClientRect().top - 76);
  const distance = destination - start;
  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : Math.min(1500, Math.max(850, Math.abs(distance) * 0.45));

  if (!duration) {
    window.scrollTo({ top: destination, behavior: "instant" });
    return;
  }

  const cancel = () => {
    cancelAnimationFrame(activeFrame);
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", cancel);
    cancelActiveScroll = null;
  };
  cancelActiveScroll = cancel;
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", cancel);

  const startedAt = performance.now();
  const animate = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo({ top: start + distance * eased, behavior: "instant" });
    if (progress < 1) {
      activeFrame = requestAnimationFrame(animate);
    } else {
      cancel();
    }
  };

  activeFrame = requestAnimationFrame(animate);
}
