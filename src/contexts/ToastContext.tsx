import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

export type ToastType = "success" | "error" | "warn" | "info";
export type ToastPositionX = "left" | "center" | "right";
export type ToastPositionY = "top" | "bottom";

export interface ToastConfig {
  positionX?: ToastPositionX;
  positionY?: ToastPositionY;
  duration?: number;
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

interface ToastContextData {
  toasts: Toast[];
  config: ToastConfig;
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

interface Props {
  children: React.ReactNode;
  config?: ToastConfig;
}

const DEFAULT_CONFIG: ToastConfig = {
  positionX: "right",
  positionY: "top",
  duration: 3000,
};

export const ToastContext = createContext({} as ToastContextData);

export function ToastContextProvider({ children, config: userConfig }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const config = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...userConfig }),
    [userConfig]
  );

  const showToast = useCallback(
    (message: string, type: ToastType = "info", duration?: number) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      const toast: Toast = {
        id,
        message,
        type,
        duration: duration ?? config.duration ?? 3000,
      };

      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration);
    },
    [config.duration]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(
    () => ({ toasts, config, showToast, removeToast }),
    [toasts, config, showToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastContextProvider");
  }
  return context;
}
