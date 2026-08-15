import type { ElementType, HTMLAttributes } from "react";
import { createElement } from "react";
import * as styles from "./Card.css";
import { cx } from "../../utils/cx";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. @default "div" */
  as?: ElementType;
  /** Inner padding (spacing token). @default "md" */
  padding?: CardPadding;
  /** Add hover elevation + glow (use for clickable cards). @default false */
  interactive?: boolean;
}

/** Surface container for grouping related content on the dark theme. */
export function Card({
  as = "div",
  padding = "md",
  interactive = false,
  className,
  ...rest
}: CardProps) {
  return createElement(as, {
    className: cx(
      styles.base,
      styles.padding[padding],
      interactive && styles.interactive,
      className,
    ),
    ...rest,
  });
}
