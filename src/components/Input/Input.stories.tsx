import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Text } from "../Text";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Search twins…" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true, value: "Locked" } };
export const Invalid: Story = { args: { invalid: true, defaultValue: "bad@" } };

export const WithLabel: Story = {
  render: (args) => (
    <Stack as="label" gap="xs">
      <Text size="sm" weight="medium">City ID</Text>
      <Input {...args} placeholder="e.g. SEL-001" />
    </Stack>
  ),
};
