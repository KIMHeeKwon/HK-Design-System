import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";

export const base = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  color: vars.color.text,
});

export const padding = styleVariants({
  none: { padding: vars.space.none },
  sm: { padding: vars.space.md },
  md: { padding: vars.space.lg },
  lg: { padding: vars.space.xl },
});

export const interactive = style({
  cursor: "pointer",
  transition: "border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.borderStrong,
      boxShadow: vars.shadow.glow,
      transform: "translateY(-2px)",
    },
  },
});
