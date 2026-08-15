import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const base = style({
  display: "flex",
  minWidth: 0,
});

export const direction = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export const gap = styleVariants({
  none: { gap: vars.space.none },
  xs: { gap: vars.space.xs },
  sm: { gap: vars.space.sm },
  md: { gap: vars.space.md },
  lg: { gap: vars.space.lg },
  xl: { gap: vars.space.xl },
  xxl: { gap: vars.space.xxl },
  xxxl: { gap: vars.space.xxxl },
});

export const align = styleVariants({
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  stretch: { alignItems: "stretch" },
});

export const justify = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
});

export const wrap = style({ flexWrap: "wrap" });
