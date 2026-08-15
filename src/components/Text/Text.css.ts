import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const base = style({
  margin: 0,
  fontFamily: vars.font.body,
  lineHeight: vars.lineHeight.normal,
});

export const size = styleVariants({
  xs: { fontSize: vars.fontSize.xs },
  sm: { fontSize: vars.fontSize.sm },
  md: { fontSize: vars.fontSize.md },
  lg: { fontSize: vars.fontSize.lg, lineHeight: vars.lineHeight.tight },
  xl: { fontSize: vars.fontSize.xl, lineHeight: vars.lineHeight.tight },
  xxl: { fontSize: vars.fontSize.xxl, lineHeight: vars.lineHeight.tight },
});

export const weight = styleVariants({
  regular: { fontWeight: vars.fontWeight.regular },
  medium: { fontWeight: vars.fontWeight.medium },
  bold: { fontWeight: vars.fontWeight.bold },
});

export const tone = styleVariants({
  default: { color: vars.color.text },
  muted: { color: vars.color.textMuted },
  accent: { color: vars.color.accent },
  danger: { color: vars.color.danger },
});

export const align = styleVariants({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
});
