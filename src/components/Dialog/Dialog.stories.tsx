import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  render: () => (
    <Dialog
      open
      onClose={() => {}}
      title="Decommission Twin Node 04?"
      footer={
        <Stack direction="row" gap="sm">
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Decommission</Button>
        </Stack>
      }
    >
      This stops telemetry ingestion for the building model and cannot be undone.
      Historical data is retained.
    </Dialog>
  ),
};

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Decommission node</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Decommission Twin Node 04?"
          footer={
            <Stack direction="row" gap="sm">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Decommission
              </Button>
            </Stack>
          }
        >
          This stops telemetry ingestion for the building model and cannot be
          undone. Historical data is retained.
        </Dialog>
      </>
    );
  },
};
