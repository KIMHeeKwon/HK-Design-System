import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const wrapper = style({
  position: "relative",
  display: "inline-flex",
  width: "100%",
});

export const select = style({
  appearance: "none",
  width: "100%",
  height: "40px",
  padding: `0 ${vars.space.xl} 0 ${vars.space.md}`,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: "border-color 120ms ease, box-shadow 120ms ease",
  selectors: {
    "&:hover:not(:disabled):not(:focus)": { borderColor: vars.color.borderStrong },
    "&:focus": {
      outline: "none",
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.focusRing}33`,
    },
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
    '&[aria-invalid="true"]': { borderColor: vars.color.danger },
  },
});

// Native dropdown options render with OS chrome; force dark surface colors.
globalStyle(`${select} option`, {
  backgroundColor: vars.color.surface,
  color: vars.color.text,
});

export const chevron = style({
  position: "absolute",
  right: vars.space.md,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: vars.color.textMuted,
  display: "inline-flex",
});
