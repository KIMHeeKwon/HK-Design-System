import type { ElementType, HTMLAttributes } from "react";
import { createElement } from "react";
import * as styles from "./Text.css";
import { cx } from "../../utils/cx";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type TextWeight = "regular" | "medium" | "bold";
export type TextTone = "default" | "muted" | "accent" | "danger";
export type TextAlign = "left" | "center" | "right";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. @default "p" */
  as?: ElementType;
  /** Font size token. @default "md" */
  size?: TextSize;
  /** Font weight. @default "regular" */
  weight?: TextWeight;
  /** Color role. @default "default" */
  tone?: TextTone;
  /** Text alignment. */
  align?: TextAlign;
}

/**
 * Typographic primitive. Renders any element via `as` and maps the design
 * system's type tokens to `size` / `weight` / `tone` props.
 */
export function Text({
  as = "p",
  size = "md",
  weight = "regular",
  tone = "default",
  align,
  className,
  ...rest
}: TextProps) {
  return createElement(as, {
    className: cx(
      styles.base,
      styles.size[size],
      styles.weight[weight],
      styles.tone[tone],
      align && styles.align[align],
      className,
    ),
    ...rest,
  });
}
