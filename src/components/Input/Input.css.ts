import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const input = style({
  display: "block",
  width: "100%",
  height: "40px",
  padding: `0 ${vars.space.md}`,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  transition: "border-color 120ms ease, box-shadow 120ms ease",
  selectors: {
    "&::placeholder": { color: vars.color.textMuted },
    "&:hover:not(:disabled):not(:focus)": { borderColor: vars.color.borderStrong },
    "&:focus": {
      outline: "none",
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.focusRing}33`,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    '&[aria-invalid="true"]': {
      borderColor: vars.color.danger,
    },
    '&[aria-invalid="true"]:focus': {
      boxShadow: `0 0 0 3px ${vars.color.danger}33`,
    },
  },
});
