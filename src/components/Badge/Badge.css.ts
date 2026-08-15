import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontFamily: vars.font.body,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.tight,
  whiteSpace: "nowrap",
  borderRadius: vars.radius.full,
  border: "1px solid transparent",
});

export const size = styleVariants({
  sm: { fontSize: vars.fontSize.xs, padding: `2px ${vars.space.sm}` },
  md: { fontSize: vars.fontSize.sm, padding: `${vars.space.xs} ${vars.space.md}` },
});

export const tone = styleVariants({
  neutral: {
    backgroundColor: vars.color.surfaceHover,
    color: vars.color.textMuted,
    borderColor: vars.color.border,
  },
  accent: {
    backgroundColor: "rgba(0, 229, 208, 0.14)",
    color: vars.color.accent,
    borderColor: "rgba(0, 229, 208, 0.35)",
  },
  violet: {
    backgroundColor: "rgba(124, 92, 255, 0.16)",
    color: vars.color.accent2Hover,
    borderColor: "rgba(124, 92, 255, 0.4)",
  },
  success: {
    backgroundColor: "rgba(61, 225, 160, 0.14)",
    color: vars.color.success,
    borderColor: "rgba(61, 225, 160, 0.35)",
  },
  warning: {
    backgroundColor: "rgba(255, 194, 75, 0.14)",
    color: vars.color.warning,
    borderColor: "rgba(255, 194, 75, 0.35)",
  },
  danger: {
    backgroundColor: "rgba(255, 90, 110, 0.14)",
    color: vars.color.danger,
    borderColor: "rgba(255, 90, 110, 0.4)",
  },
});
