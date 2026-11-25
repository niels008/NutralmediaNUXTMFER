import { hasAccess, isProtectedPath } from "../utils/case-access";

export default defineEventHandler((event) => {
  if (!isProtectedPath(event.path)) return;

  setHeader(event, "X-Robots-Tag", "noindex");

  const { casePassword } = useRuntimeConfig(event);
  if (!casePassword) {
    // In development the cases stay open; in production a missing password
    // must fail closed instead of silently publishing every case.
    if (import.meta.dev) return;
    throw createError({
      statusCode: 503,
      statusMessage: "Case access is not configured",
    });
  }

  if (hasAccess(event, casePassword)) return;

  return sendRedirect(
    event,
    `/unlock?redirect=${encodeURIComponent(event.path)}`,
    302
  );
});
