# @kiorabr/react-toast

A lightweight and optimized React toast notification library with TypeScript support.

## Features

- ✅ **Multiple toast types**: `success`, `error`, `warn`, `info`
- ✅ **Configurable duration**: Set custom display time for each toast
- ✅ **Flexible positioning**: Configure X (left, center, right) and Y (top, bottom) positions
- ✅ **Click to dismiss**: Users can close toasts by clicking
- ✅ **Auto-dismiss**: Toasts automatically disappear after the specified duration
- ✅ **Lightweight**: Minimal bundle size with no external dependencies
- ✅ **TypeScript**: Full TypeScript support with type definitions
- ✅ **Optimized**: Uses React hooks and memoization for optimal performance
- ✅ **Accessible**: Full ARIA support and keyboard navigation
- ✅ **Visual timer**: Animated progress bar showing remaining time

## Installation

```bash
npm install @kiorabr/react-toast
# or
yarn add @kiorabr/react-toast
# or
pnpm add @kiorabr/react-toast
```

## Usage

### 1. Import the CSS (Required)

In your main application file or layout:

```tsx
import "@kiorabr/react-toast/style.css";
```

### 2. Wrap your app with ToastContextProvider

```tsx
import { ToastContextProvider, Toast } from "@kiorabr/react-toast";

function App() {
  return (
    <ToastContextProvider
      config={{
        positionX: "right", // 'left' | 'center' | 'right'
        positionY: "top", // 'top' | 'bottom'
        duration: 3000, // default duration in milliseconds
      }}
    >
      {/* Your app components */}
      <Toast />
    </ToastContextProvider>
  );
}
```

### 3. Use the toast hook in your components

```tsx
import { useToastContext } from "@kiorabr/react-toast";

function MyComponent() {
  const { showToast } = useToastContext();

  return (
    <div>
      <button onClick={() => showToast("Success!", "success")}>
        Show Success Toast
      </button>

      <button onClick={() => showToast("Error occurred", "error")}>
        Show Error Toast
      </button>

      <button onClick={() => showToast("Warning!", "warn")}>
        Show Warning Toast
      </button>

      <button onClick={() => showToast("Info message", "info")}>
        Show Info Toast
      </button>

      {/* Custom duration (5 seconds) */}
      <button onClick={() => showToast("Custom duration", "info", 5000)}>
        Show Long Toast
      </button>
    </div>
  );
}
```

## API Reference

### ToastContextProvider Props

| Prop               | Type                            | Default   | Description                      |
| ------------------ | ------------------------------- | --------- | -------------------------------- |
| `config.positionX` | `'left' \| 'center' \| 'right'` | `'right'` | Horizontal position of toasts    |
| `config.positionY` | `'top' \| 'bottom'`             | `'top'`   | Vertical position of toasts      |
| `config.duration`  | `number`                        | `3000`    | Default duration in milliseconds |

### useToastContext Hook

Returns an object with the following properties:

- **`showToast(message: string, type?: ToastType, duration?: number)`**: Display a toast notification
  - `message`: The text to display
  - `type`: Optional toast type (`'success'`, `'error'`, `'warn'`, `'info'`). Default: `'info'`
  - `duration`: Optional custom duration in milliseconds. Overrides the default config duration
- **`removeToast(id: string)`**: Manually remove a toast by its ID
- **`toasts`**: Array of currently displayed toasts
- **`config`**: Current toast configuration

### Toast Types

```typescript
type ToastType = "success" | "error" | "warn" | "info";
type ToastPositionX = "left" | "center" | "right";
type ToastPositionY = "top" | "bottom";
```

## Examples

### Different Positions

```tsx
// Top Right (Default)
<ToastContextProvider config={{ positionX: 'right', positionY: 'top' }}>

// Bottom Center
<ToastContextProvider config={{ positionX: 'center', positionY: 'bottom' }}>

// Top Left
<ToastContextProvider config={{ positionX: 'left', positionY: 'top' }}>
```

### Custom Durations

```tsx
const { showToast } = useToastContext();

// Quick toast (1 second)
showToast("Quick message", "info", 1000);

// Long toast (10 seconds)
showToast("Important information", "warn", 10000);

// Default duration (from config)
showToast("Normal message", "success");
```

### Accessibility

The library includes full accessibility support:

- ARIA labels for screen readers
- Keyboard navigation (Enter, Space, Escape to dismiss)
- Focus management
- Semantic HTML with proper roles
- Visual timer bar with progress indication

## Customization

While the library provides default styling via the included CSS file, you can override styles by targeting the classes:

- `.toast-container` - Main container
- `.toast-item` - Individual toast
- `.toast-icon` - Icon wrapper
- `.toast-message` - Message text
- `.toast-timebar` - Progress bar

## TypeScript

The library is written in TypeScript and exports all necessary types:

```typescript
import type {
  ToastType,
  ToastPositionX,
  ToastPositionY,
  ToastConfig,
} from "@kiorabr/react-toast";
```

## Browser Support

Works in all modern browsers that support:

- ES2020
- CSS animations
- CSS transforms

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

Found a bug or have a feature request? [Open an issue](https://github.com/kiora/react-toast/issues)
