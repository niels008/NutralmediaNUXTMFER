import { onBeforeUnmount, onMounted } from "vue";

const DEFAULT_DURATION = ".5s";
const DEFAULT_DELAY = "0s";

// Reveals every element with the `anim` class once it scrolls into view.
// Elements are unobserved after they are revealed, so an element animates
// once instead of replaying on every scroll direction change.
export function useScrollReveal() {
  let observer = null;

  onMounted(() => {
    const elements = document.querySelectorAll(".anim");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.style.opacity = "1";
      });
      return;
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const duration = element.dataset.duration || DEFAULT_DURATION;
        const delay = element.dataset.delay || DEFAULT_DELAY;
        element.style.animation = `anim1 ${duration} ${delay} forwards ease-out`;
        observer.unobserve(element);
      });
    });

    elements.forEach((element) => observer.observe(element));
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });
}
