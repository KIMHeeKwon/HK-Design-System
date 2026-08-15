import { forwardRef, type InputHTMLAttributes } from "react";
import * as styles from "./Input.css";
import { cx } from "../../utils/cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Mark the field as invalid (sets `aria-invalid` + danger styling). */
  invalid?: boolean;
}

/**
 * Single-line text field. Renders a native `<input>`; all input attributes
 * (`type`, `value`, `onChange`, `placeholder`, `disabled`) pass through.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid = false, className, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cx(styles.input, className)}
      {...rest}
    />
  );
});
