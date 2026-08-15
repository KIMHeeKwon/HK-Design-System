import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.sm,
  fontFamily: vars.font.body,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.tight,
  border: "1px solid transparent",
  borderRadius: vars.radius.md,
  cursor: "pointer",
  whiteSpace: "nowrap",
  userSelect: "none",
  transition:
    "background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease, color 120ms ease",
  selectors: {
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 3px ${vars.color.focusRing}55`,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.sm,
    padding: `0 ${vars.space.md}`,
    height: "32px",
  },
  md: {
    fontSize: vars.fontSize.md,
    padding: `0 ${vars.space.lg}`,
    height: "40px",
  },
  lg: {
    fontSize: vars.fontSize.lg,
    padding: `0 ${vars.space.xl}`,
    height: "48px",
  },
});

export const variant = styleVariants({
  primary: {
    backgroundColor: vars.color.accent,
    color: vars.color.accentText,
    selectors: {
      "&:hover:not(:disabled)": { backgroundColor: vars.color.accentHover },
      "&:active:not(:disabled)": { backgroundColor: vars.color.accentActive },
    },
  },
  secondary: {
    backgroundColor: vars.color.surface,
    color: vars.color.text,
    borderColor: vars.color.border,
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.surfaceHover,
        borderColor: vars.color.borderStrong,
      },
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: vars.color.text,
    selectors: {
      "&:hover:not(:disabled)": { backgroundColor: vars.color.surfaceHover },
    },
  },
  danger: {
    backgroundColor: vars.color.danger,
    color: vars.color.dangerText,
    selectors: {
      "&:hover:not(:disabled)": { backgroundColor: "#FF7183" },
    },
  },
});

export const fullWidth = style({ width: "100%" });
