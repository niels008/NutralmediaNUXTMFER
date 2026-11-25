import {
  CASE_COOKIE,
  CASE_MAX_AGE,
  safeEqual,
  signToken,
} from "../utils/case-access";

export default defineEventHandler(async (event) => {
  const { password } = await readBody<{ password?: string }>(event);
  const { casePassword } = useRuntimeConfig(event);

  if (!casePassword) {
    throw createError({
      statusCode: 503,
      statusMessage: "Case access is not configured",
    });
  }

  if (typeof password !== "string" || !safeEqual(password, casePassword)) {
    throw createError({ statusCode: 401, statusMessage: "Wrong password" });
  }

  // Vercel always serves https; a local preview over http must still work.
  const secure = getRequestProtocol(event) === "https";
  const expiresAt = Date.now() + CASE_MAX_AGE * 1000;
  setCookie(event, CASE_COOKIE, signToken(casePassword, expiresAt), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: CASE_MAX_AGE,
  });
  return { ok: true };
});
