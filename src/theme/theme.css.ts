import { createGlobalTheme } from "@vanilla-extract/css";

/**
 * HK Design System — "Metaverse" theme tokens.
 *
 * Defined on :root as CSS custom properties via vanilla-extract's
 * createGlobalTheme. Every component references these `vars` so the whole
 * system re-themes from one place. Values are the single source of truth
 * for color, typography, spacing, radius and elevation.
 */
export const vars = createGlobalTheme(":root", {
  color: {
    bg: "#0B0E1A",
    surface: "#141A2E",
    surfaceHover: "#1C2440",
    text: "#E6ECFF",
    textMuted: "#9AA7C7",
    border: "#24304F",
    borderStrong: "#33436E",

    accent: "#00E5D0",
    accentHover: "#25EFDD",
    accentActive: "#00C4B4",
    accentText: "#04121A",

    accent2: "#7C5CFF",
    accent2Hover: "#957BFF",
    accent2Text: "#0A0620",

    danger: "#FF5A6E",
    dangerText: "#1A0509",
    success: "#3DE1A0",
    warning: "#FFC24B",

    focusRing: "#00E5D0",
    overlay: "rgba(4, 8, 20, 0.72)",
  },
  font: {
    body: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    xxl: "2rem",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
  },
  space: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    xxl: "32px",
    xxxl: "48px",
  },
  radius: {
    none: "0",
    sm: "6px",
    md: "10px",
    lg: "16px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
    md: "0 4px 12px rgba(0, 0, 0, 0.5)",
    lg: "0 12px 32px rgba(0, 0, 0, 0.6)",
    glow: "0 0 0 1px rgba(0, 229, 208, 0.4), 0 0 20px rgba(0, 229, 208, 0.25)",
  },
});
