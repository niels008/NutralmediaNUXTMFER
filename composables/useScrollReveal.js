import { nextTick, onBeforeUnmount, onMounted } from "vue";

const DEFAULT_DURATION = ".5s";
const DEFAULT_DELAY = "0s";

// Reveals every element with the `anim` class once it scrolls into view.
// Elements are unobserved after they are revealed, so an element animates
// once instead of replaying on every scroll direction change.
export function useScrollReveal() {
  let observer = null;

  const observeAnimated = () => {
    observer?.disconnect();

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

    document
      .querySelectorAll(".anim")
      .forEach((element) => observer.observe(element));
  };

  onMounted(observeAnimated);

  // The projects layout stays mounted when one case links to the next, so
  // the elements of the page that just arrived have to be picked up again.
  // page:finish fires once that page is rendered; a route watcher plus
  // nextTick is too early, the incoming page component is still loading.
  const stopHook = useNuxtApp().hook("page:finish", () =>
    nextTick(observeAnimated),
  );

  onBeforeUnmount(() => {
    stopHook();
    observer?.disconnect();
    observer = null;
  });
}
