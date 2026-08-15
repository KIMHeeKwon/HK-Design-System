import type { Preview } from "@storybook/react";
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
