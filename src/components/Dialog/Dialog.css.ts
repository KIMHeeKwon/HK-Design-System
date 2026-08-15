import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const dialog = style({
  padding: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  boxShadow: vars.shadow.lg,
  width: "min(92vw, 480px)",
  fontFamily: vars.font.body,
  selectors: {
    "&::backdrop": {
      backgroundColor: vars.color.overlay,
      backdropFilter: "blur(2px)",
    },
  },
});

export const header = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: vars.space.md,
  padding: `${vars.space.lg} ${vars.space.lg} 0`,
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
});

export const closeButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  flexShrink: 0,
  padding: 0,
  color: vars.color.textMuted,
  background: "transparent",
  border: "none",
  borderRadius: vars.radius.sm,
  cursor: "pointer",
  transition: "background-color 120ms ease, color 120ms ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.surfaceHover,
      color: vars.color.text,
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 3px ${vars.color.focusRing}55`,
    },
  },
});

export const body = style({
  padding: vars.space.lg,
  fontSize: vars.fontSize.md,
  color: vars.color.textMuted,
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.sm,
  padding: `0 ${vars.space.lg} ${vars.space.lg}`,
});
