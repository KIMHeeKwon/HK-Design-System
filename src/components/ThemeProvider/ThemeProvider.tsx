import type { HTMLAttributes } from "react";
import * as styles from "./ThemeProvider.css";
import { cx } from "../../utils/cx";

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Themed surface root. The design system is dark-themed: components assume a
 * `var(--color-bg)` surface with `var(--color-text)` foreground. Wrap an app
 * (or any region) in `ThemeProvider` to establish that surface — transparent
 * controls like `Button variant="ghost"` and bare `Text` only read correctly
 * on it. Renders a plain `<div>`; pass `style`/`className` to size it.
 */
export function ThemeProvider({ className, ...rest }: ThemeProviderProps) {
  return <div className={cx(styles.root, className)} {...rest} />;
}
