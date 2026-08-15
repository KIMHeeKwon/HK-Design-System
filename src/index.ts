// Self-hosted fonts (latin subset) — bundled so no external font host is needed.
// Imported from the entry so the side-effect CSS survives tree-shaking.
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";

// Side-effect: register :root design tokens + global base styles.
import "./theme";

export { vars } from "./theme/theme.css";
export { cx } from "./utils/cx";

export * from "./components/ThemeProvider";
export * from "./components/Button";
export * from "./components/Text";
export * from "./components/Stack";
export * from "./components/Badge";
export * from "./components/Card";
export * from "./components/Input";
export * from "./components/Checkbox";
export * from "./components/Select";
export * from "./components/Dialog";
