import raw from "./tokens.json";

/**
 * Typed access to the VecroMS design tokens.
 *
 * Requires `resolveJsonModule: true` in tsconfig (Vite/Next enable it by default).
 * Prefer CSS variables in components; use this module for charts, canvas,
 * inline styles and tests where a concrete value is required.
 */
export const tokens = raw;
export type DesignTokens = typeof raw;

export type Theme = "light" | "dark";

/** Returns a CSS custom property reference, e.g. cssVar("primary") -> "var(--vms-primary)". */
export function cssVar(name: string): string {
  return `var(--vms-${name.replace(/^--?(vms-)?/, "")})`;
}

/** Chart series colors for the active theme. */
export function chartColors(theme: Theme = "light"): readonly string[] {
  return tokens.color.chart[theme];
}
