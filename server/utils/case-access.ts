import { createHmac, timingSafeEqual } from "node:crypto";
import projects from "../../data/projects.json";

export const CASE_COOKIE = "case_access";
export const CASE_MAX_AGE = 60 * 60 * 24 * 14;

const caseSlugs = Object.keys(projects).map((name) => name.toLowerCase());

// Routes are the project names from data/projects.json, matched case
// insensitively because vue-router resolves /visma and /Visma to one route.
export function isProtectedPath(path: string): boolean {
  const [firstSegment] = path.split("?")[0].replace(/^\/+/, "").split("/");
  return caseSlugs.includes(firstSegment.toLowerCase());
}

export function signToken(password: string, expiresAt: number): string {
  const signature = createHmac("sha256", password)
    .update(`case:${expiresAt}`)
    .digest("hex");
  return `${expiresAt}.${signature}`;
}

export function hasAccess(event: any, password: string): boolean {
  const token = getCookie(event, CASE_COOKIE);
  return Boolean(token && verifyToken(token, password));
}

export function verifyToken(token: string, password: string): boolean {
  const [expiresAt, signature] = token.split(".");
  const expiry = Number(expiresAt);
  if (!Number.isFinite(expiry) || !signature || Date.now() > expiry) return false;
  return safeEqual(signToken(password, expiry), token);
}

export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}
