import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import * as styles from "./Checkbox.css";
import { cx } from "../../utils/cx";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Text shown next to the box. */
  label?: ReactNode;
}

/**
 * Custom-styled checkbox backed by a native `<input type="checkbox">`, so it
 * stays keyboard- and form-accessible. Wrap-in-`<label>` links the caption.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, className, ...rest }, ref) {
    return (
      <label className={cx(styles.root, className)}>
        <input ref={ref} type="checkbox" className={styles.input} {...rest} />
        <span className={styles.box} aria-hidden="true">
          <svg
            className={styles.checkIcon}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 6L5 9L10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {label != null && <span>{label}</span>}
      </label>
    );
  },
);
