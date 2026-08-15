import {
  useEffect,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import * as styles from "./Dialog.css";
import { cx } from "../../utils/cx";

export interface DialogProps {
  /** Whether the modal is shown. */
  open: boolean;
  /** Called when the user dismisses (Esc, backdrop, or close button). */
  onClose: () => void;
  /** Heading shown in the header. */
  title?: ReactNode;
  /** Optional footer content, typically action buttons. */
  footer?: ReactNode;
  /** Body content. */
  children?: ReactNode;
  /** Extra class on the `<dialog>` element. */
  className?: string;
}

/**
 * Modal dialog built on the native `<dialog>` element — it provides the
 * top-layer stacking, backdrop, and focus trapping for free. Controlled via
 * `open`; closing (Esc / backdrop / ✕) is reported through `onClose`.
 */
export function Dialog({
  open,
  onClose,
  title,
  footer,
  children,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    else if (!open && node.open) node.close();
  }, [open]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    node.addEventListener("cancel", handleCancel);
    return () => node.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className={cx(styles.dialog, className)}
      onClick={handleBackdropClick}
    >
      <div className={styles.header}>
        {title ? <h2 className={styles.title}>{title}</h2> : <span />}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </dialog>
  );
}
