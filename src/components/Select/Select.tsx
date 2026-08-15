import { forwardRef, type SelectHTMLAttributes } from "react";
import * as styles from "./Select.css";
import { cx } from "../../utils/cx";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Mark the field as invalid (sets `aria-invalid` + danger border). */
  invalid?: boolean;
}

/**
 * Styled wrapper over a native `<select>`. Pass `<option>` children as usual;
 * keyboard, form submission and mobile pickers all work natively.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { invalid = false, className, children, ...rest },
  ref,
) {
  return (
    <span className={styles.wrapper}>
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cx(styles.select, className)}
        {...rest}
      >
        {children}
      </select>
      <span className={styles.chevron} aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 5L7 8.5L10.5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
});
