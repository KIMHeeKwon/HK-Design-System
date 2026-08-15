import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  cursor: "pointer",
  userSelect: "none",
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  selectors: {
    "&:has(input:disabled)": { cursor: "not-allowed", opacity: 0.5 },
  },
});

/** Visually hidden but still focusable and accessible. */
export const input = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  opacity: 0,
  margin: 0,
});

export const box = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  flexShrink: 0,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.borderStrong}`,
  borderRadius: vars.radius.sm,
  color: vars.color.accentText,
  transition: "background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease",
  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.accent,
      borderColor: vars.color.accent,
    },
    [`${input}:focus-visible + &`]: {
      boxShadow: `0 0 0 3px ${vars.color.focusRing}55`,
    },
  },
});

export const checkIcon = style({
  opacity: 0,
  transform: "scale(0.6)",
  transition: "opacity 120ms ease, transform 120ms ease",
  selectors: {
    [`${input}:checked + ${box} &`]: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
});
