import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text";
import { Badge } from "../Badge";
import { Stack } from "../Stack";
import { Button } from "../Button";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 320 }}>
      <Stack gap="sm">
        <Stack direction="row" justify="between" align="center">
          <Text as="h3" size="lg" weight="bold">Twin Node 04</Text>
          <Badge tone="success">Online</Badge>
        </Stack>
        <Text size="sm" tone="muted">
          Real-time building telemetry synced 2s ago.
        </Text>
        <Button size="sm" variant="secondary" fullWidth>Open dashboard</Button>
      </Stack>
    </Card>
  ),
};

export const Interactive: Story = {
  args: { interactive: true },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 320 }}>
      <Text weight="medium">Hover me — I lift and glow.</Text>
    </Card>
  ),
};
