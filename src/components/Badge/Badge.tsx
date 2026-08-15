import type { HTMLAttributes } from "react";
import * as styles from "./Badge.css";
import { cx } from "../../utils/cx";

export type BadgeTone =
  | "neutral"
  | "accent"
  | "violet"
  | "success"
  | "warning"
  | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic color. @default "neutral" */
  tone?: BadgeTone;
  /** Badge size. @default "md" */
  size?: BadgeSize;
}

/** Compact status / category label rendered as an inline `<span>`. */
export function Badge({
  tone = "neutral",
  size = "md",
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(styles.base, styles.size[size], styles.tone[tone], className)}
      {...rest}
    />
  );
}
