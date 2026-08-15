import type { Preview } from "@storybook/react";
// Self-hosted fonts (same set the library bundles) so the storybook oracle
// renders the real typeface — no external font host.
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";
// Side-effect: register :root design tokens + global base styles.
import "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: "metaverse",
      values: [
        { name: "metaverse", value: "#0B0E1A" },
        { name: "surface", value: "#141A2E" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
