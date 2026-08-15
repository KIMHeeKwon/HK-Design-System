import type { ElementType, HTMLAttributes } from "react";
import { createElement } from "react";
import * as styles from "./Stack.css";
import { cx } from "../../utils/cx";

export type StackDirection = "row" | "column";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. @default "div" */
  as?: ElementType;
  /** Main axis. @default "column" */
  direction?: StackDirection;
  /** Space between children (spacing token). @default "md" */
  gap?: StackGap;
  /** Cross-axis alignment. @default "stretch" */
  align?: StackAlign;
  /** Main-axis distribution. @default "start" */
  justify?: StackJustify;
  /** Allow items to wrap. @default false */
  wrap?: boolean;
}

/**
 * Flexbox layout primitive. Composes direction, spacing-token gap, and
 * alignment so layouts read declaratively instead of with ad-hoc styles.
 */
export function Stack({
  as = "div",
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
  ...rest
}: StackProps) {
  return createElement(as, {
    className: cx(
      styles.base,
      styles.direction[direction],
      styles.gap[gap],
      styles.align[align],
      styles.justify[justify],
      wrap && styles.wrap,
      className,
    ),
    ...rest,
  });
}
