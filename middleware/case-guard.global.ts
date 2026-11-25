import projects from "../data/projects.json";

const caseSlugs = Object.keys(projects).map((name) => name.toLowerCase());

// The server middleware guards every request that reaches the server. This one
// covers client side navigation, where no server request is made. It asks the
// server rather than reading a cookie the browser could set itself.
export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const [firstSegment] = to.path.replace(/^\/+/, "").split("/");
  if (!caseSlugs.includes(firstSegment.toLowerCase())) return;

  const { unlocked } = await $fetch("/api/case-access");
  if (unlocked) return;

  return navigateTo(`/unlock?redirect=${encodeURIComponent(to.fullPath)}`);
});
