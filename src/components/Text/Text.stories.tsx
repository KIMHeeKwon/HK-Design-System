import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  args: { children: "The quick brown fox — 다람쥐 헌 쳇바퀴에 타고파" },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text as="h1" size="xxl" weight="bold">Display xxl</Text>
      <Text as="h2" size="xl" weight="bold">Heading xl</Text>
      <Text as="h3" size="lg" weight="medium">Title lg</Text>
      <Text size="md">Body md</Text>
      <Text size="sm" tone="muted">Caption sm · muted</Text>
      <Text size="xs" tone="accent">Label xs · accent</Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="accent">Accent tone</Text>
      <Text tone="danger">Danger tone</Text>
    </div>
  ),
};
