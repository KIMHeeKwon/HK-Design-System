import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { label: "Enable live sync" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };

export const Group: Story = {
  render: () => (
    <Stack gap="sm">
      <Checkbox defaultChecked label="Telemetry" />
      <Checkbox label="Alerts" />
      <Checkbox label="Auto-scale" />
    </Stack>
  ),
};
