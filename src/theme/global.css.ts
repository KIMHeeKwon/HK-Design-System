import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

/** Base reset + document defaults for the Metaverse theme. */
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.normal,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});
