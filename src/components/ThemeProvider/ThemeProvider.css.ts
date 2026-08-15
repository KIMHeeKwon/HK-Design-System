import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const root = style({
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.normal,
});
