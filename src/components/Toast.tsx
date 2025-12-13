import type { ToastType } from "../contexts/ToastContext";
import { useToastContext } from "../contexts/ToastContext";
import { Alert, Check, Info, X } from "../icons";
import "./Toast.css";

const TOAST_STYLES: Record<ToastType, string> = {
  success: "#05df72",
  error: "#f83943",
  warn: "#ffba00",
  info: "#8ec5ff",
};

export function Toast() {
  const { toasts, config, removeToast } = useToastContext();

  if (toasts.length === 0) return null;

  const containerClasses = [
    "toast-container",
    `toast-container-${config.positionY}`,
    `toast-container-${config.positionX}`,
  ].join(" ");

  return (
    <>
      <div
        className={containerClasses}
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-item toast-item-${config.positionY}`}
            style={{
              background: TOAST_STYLES[toast.type],
            }}
            onClick={() => removeToast(toast.id)}
            role="alert"
            aria-live={toast.type === "error" ? "assertive" : "polite"}
            aria-atomic="true"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                e.preventDefault();
                removeToast(toast.id);
              }
            }}
          >
            <div
              className="toast-timebar"
              style={{ animationDuration: `${toast.duration}ms` }}
              role="progressbar"
              aria-label="Time remaining"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
            />
            <span className="toast-icon" aria-hidden="true">
              {toast.type === "success" && <Check size={18} />}
              {toast.type === "error" && <X size={18} />}
              {toast.type === "warn" && <Alert size={18} />}
              {toast.type === "info" && <Info size={18} />}
            </span>
            <span className="toast-message">{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
