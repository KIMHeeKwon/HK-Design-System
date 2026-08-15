import { forwardRef, type ButtonHTMLAttributes } from "react";
import * as styles from "./Button.css";
import { cx } from "../../utils/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: ButtonVariant;
  /** Control height and padding. @default "md" */
  size?: ButtonSize;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
}

/**
 * Primary interactive control. Renders a native `<button>`, so all button
 * attributes (`onClick`, `disabled`, `type`, `aria-*`) pass straight through.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        styles.base,
        styles.size[size],
        styles.variant[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
      {...rest}
    />
  );
});
