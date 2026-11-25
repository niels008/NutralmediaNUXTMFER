import { hasAccess } from "../utils/case-access";

// Client side navigation has no server request of its own, so the route
// middleware asks here instead of trusting anything the browser can set.
export default defineEventHandler((event) => {
  const { casePassword } = useRuntimeConfig(event);
  if (!casePassword) return { unlocked: import.meta.dev };
  return { unlocked: hasAccess(event, casePassword) };
});
