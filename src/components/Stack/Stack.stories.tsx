import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Button } from "../Button";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#141A2E",
      border: "1px solid #24304F",
      borderRadius: 10,
      padding: "12px 16px",
      color: "#E6ECFF",
    }}
  >
    {children}
  </div>
);

export const Column: Story = {
  args: { direction: "column", gap: "md" },
  render: (args) => (
    <Stack {...args}>
      <Box>First</Box>
      <Box>Second</Box>
      <Box>Third</Box>
    </Stack>
  ),
};

export const Row: Story = {
  args: { direction: "row", gap: "sm", align: "center" },
  render: (args) => (
    <Stack {...args}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </Stack>
  ),
};

export const SpaceBetween: Story = {
  args: { direction: "row", justify: "between", align: "center" },
  render: (args) => (
    <Stack {...args}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Stack>
  ),
};
