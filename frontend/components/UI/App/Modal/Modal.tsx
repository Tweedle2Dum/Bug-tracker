"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Divider, Title, Flex, ScrollArea, Paper, Stack } from "@mantine/core";
import { TextInput, Textarea, Box } from "@mantine/core";
import Comment from "../Comments/Comment";

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

type TaskProps = {
  taskName: string;
};

function Comments() {
  return <Paper shadow="xl" p={'xl'}>Comment</Paper>;
}

function CommentList() {
  return (
    <Box my={'lg'}>
      <ScrollArea h={'250px'}>
        {" "}
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </ScrollArea>
    </Box>
  );
}



function Sidebar() {
  return(
    <>
      <Title order={6}>Add</Title>
      <Stack gap={'8px'} mt={'4px'}>
        <Button size="xs">Member</Button>
        <Button size="xs">Deadline</Button>
      </Stack>
    </>
  )
}

function TaskForm({ taskName }: TaskProps) {
  return (
    <>
      <Flex gap={"xl"}>
        <div style={{ flexGrow: 0.75 }}>
          <Title order={4}>{taskName}</Title>
          <Textarea
            label="Description"
            placeholder="Write a description about the task"
          />
          <Divider m={"md"} />
          <Title order={5}>Comments</Title>
          <Textarea
            label="Add a comment"
            placeholder="Write a comment about the task"
          />
          <Box mt={"8px"}>
            <Button>Add</Button>
          </Box>
          <CommentList />
        </div>
        <Divider orientation="vertical" />
        <div style={{ flexGrow: 0.25 }}><Sidebar/></div>
      </Flex>
    </>
  );
}

type ModalProps = {
  opened: boolean;
  open: () => void;
  close: () => void;
  contentType: "Workspace" | "Board" | "Task" | "";
  taskName?: string;
};
export default function Modals({
  opened,
  open,
  close,
  contentType,
  taskName,
}: ModalProps) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={contentType}
        centered
        size={"lg"}
      >
        {contentType === "Workspace" ? (
          <WorkspaceForm />
        ) : contentType === "Board" ? (
          <BoardForm />
        ) : contentType === "Task" ? (
          <TaskForm taskName="taskName" />
        ) : null}
      </Modal>
    </>
  );
}
