"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Divider } from "@mantine/core";
import { TextInput, Textarea } from "@mantine/core";
type props = {
  opened: boolean;
  open: () => void;
  close: () => void;
  contentType: "Workspace" | "Board" | "";
};

function WorkspaceForm() {
  return (
    <>
      <TextInput
        label="Workspace name"
        placeholder="Best workspace in the world"
      />
      <Divider m={"md"} />
      <Textarea
        label="Description"
        placeholder="Best description in the world"
      />
      <Divider m={"md"} />

      <Button fullWidth>Create workspace</Button>
    </>
  );
}

function BoardForm() {
  return (
    <>
      <TextInput
        label="Board Title"
        description="Name of the board"
        placeholder="Best board in the world"
      />
      <Divider m={"md"} />
      <Textarea
        label="Description"
        placeholder="Best description in the world"
      />
      <Divider m={"md"} />

      <Button fullWidth>Create Board</Button>
    </>
  );
}

export default function Modals({ opened, open, close, contentType }: props) {
  const modalContent = {};

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={"Create a " + contentType}
        centered
      >
        {contentType === "Workspace" ? (
          <WorkspaceForm />
        ) : contentType === "Board" ? (
          <BoardForm />
        ) : null}
      </Modal>
    </>
  );
}
