import { useState } from "react";
import {
  ToastContextProvider,
  useToastContext,
  ToastPositionX,
  ToastPositionY,
} from "./contexts/ToastContext";
import { Toast } from "./components/Toast";

function AppContent() {
  const { showToast } = useToastContext();

  return (
    <div>
      {/* Toast Type Tests */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "16px", fontWeight: 600 }}>
          🎨 Toast Types
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() =>
              showToast("Operation completed successfully!", "success")
            }
            style={{
              padding: "10px 20px",
              background: "#05df72",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Success Toast
          </button>

          <button
            onClick={() => showToast("An error occurred!", "error")}
            style={{
              padding: "10px 20px",
              background: "#f83943",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Error Toast
          </button>

          <button
            onClick={() =>
              showToast("Warning: Please check your input", "warn")
            }
            style={{
              padding: "10px 20px",
              background: "#ffba00",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Warning Toast
          </button>

          <button
            onClick={() =>
              showToast("This is an informational message", "info")
            }
            style={{
              padding: "10px 20px",
              background: "#8ec5ff",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Info Toast
          </button>
        </div>
      </div>

      {/* Duration Tests */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "16px", fontWeight: 600 }}>
          ⏱️ Custom Durations
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => showToast("Quick toast - 1 second", "info", 1000)}
            style={{
              padding: "10px 20px",
              background: "#a684ff",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            1 Second
          </button>

          <button
            onClick={() => showToast("Default duration - 3 seconds", "info")}
            style={{
              padding: "10px 20px",
              background: "#a684ff",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            3 Seconds (Default)
          </button>

          <button
            onClick={() => showToast("Medium toast - 5 seconds", "info", 5000)}
            style={{
              padding: "10px 20px",
              background: "#a684ff",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            5 Seconds
          </button>

          <button
            onClick={() => showToast("Long toast - 10 seconds", "warn", 10000)}
            style={{
              padding: "10px 20px",
              background: "#a684ff",
              color: "black",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            10 Seconds
          </button>
        </div>
      </div>

      {/* Multiple Toasts Test */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "16px", fontWeight: 600 }}>
          📚 Multiple Toasts
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              showToast("First toast", "success");
              setTimeout(() => showToast("Second toast", "info"), 200);
              setTimeout(() => showToast("Third toast", "warn"), 400);
            }}
            style={{
              padding: "10px 20px",
              background: "#6c757d",
              color: "white",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Show 3 Toasts
          </button>

          <button
            onClick={() => {
              for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                  const types = ["success", "error", "warn", "info"] as const;
                  showToast(`Toast #${i}`, types[i % 4]);
                }, i * 150);
              }
            }}
            style={{
              padding: "10px 20px",
              background: "#6c757d",
              color: "white",
              border: "1px solid black",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            Show 5 Toasts
          </button>
        </div>
      </div>

      {/* Features */}
      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: 600 }}>
          Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              🎨 Multiple Types
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              Success, error, warn, and info variants
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              ⏱️ Configurable Duration
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              Default 3s or custom per toast
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              📍 Flexible Positioning
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              X: left, center, right | Y: top, bottom
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              👆 Click to Dismiss
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              Manual close on click
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              🧩 Lightweight
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              No external dependencies
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "8px" }}>
              ⚡ Auto-dismiss
            </div>
            <div style={{ fontSize: "14px", color: "#6c757d" }}>
              Automatic timeout removal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositionSelector() {
  const [positionX, setPositionX] = useState<ToastPositionX>("right");
  const [positionY, setPositionY] = useState<ToastPositionY>("top");
  const [duration, setDuration] = useState(3000);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ margin: 0 }}>@kiorabr/react-toast Demo</h1>
        <p style={{ color: "#6c757d", margin: 0 }}>
          Test all toast types and configurations
        </p>
      </header>
      <div
        style={{
          background: "#212529",
          color: "white",
          padding: "2rem 2.5rem",
          marginBottom: "2rem",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "20px" }}>
          ⚙️ Configuration Panel
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Position X:
            </label>
            <select
              value={positionX}
              onChange={(e) => setPositionX(e.target.value as ToastPositionX)}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #495057",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
              }}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Position Y:
            </label>
            <select
              value={positionY}
              onChange={(e) => setPositionY(e.target.value as ToastPositionY)}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #495057",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
              }}
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Default Duration (ms):
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min="500"
              max="30000"
              step="500"
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #495057",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
      </div>

      <ToastContextProvider
        config={{ positionX, positionY, duration }}
        key={`${positionX}-${positionY}-${duration}`}
      >
        <Toast />
        <AppContent />
      </ToastContextProvider>
    </div>
  );
}

export function App() {
  return <PositionSelector />;
}
