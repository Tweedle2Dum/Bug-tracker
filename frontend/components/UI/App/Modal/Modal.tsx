"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Divider,
  Title,
  Flex,
  ScrollArea,
  Paper,
  Stack,
  Select,
} from "@mantine/core";
import { TextInput, Textarea, Box } from "@mantine/core";
import Comment from "../Comments/Comment";
import { useForm } from "@mantine/form";
import { FormEvent } from "react";
import usePostWorkspace from "components/Hooks/API/useCreateWorkspace";
import { useSession } from "next-auth/react";
import usePostBoard from "components/Hooks/API/useCreateBoard";
import useGetUser from "components/Hooks/API/useGetUser";
import { Session } from "next-auth";

function WorkspaceForm() {
  const { data: session, status } = useSession();
  const { mutate, isSuccess, isError } = usePostWorkspace();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (session) {
      mutate({
        session,
        workspace: {
          name: form.values.name,
          description: form.values.description,
        },
      });
    }
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <TextInput
          label="Workspace name"
          placeholder="Best workspace in the world"
          {...form.getInputProps("name")}
        />
        <Divider m={"md"} />
        <Textarea
          label="Description"
          placeholder="Best description in the world"
          {...form.getInputProps("description")}
        />
        <Divider m={"md"} />
        <Button fullWidth type="submit">
          Create workspace
        </Button>
      </form>
    </>
  );
}

function BoardForm() {
  const { data: session, status } = useSession();
  const {
    data,
    isError: getError,
    isSuccess: getSuccess,
    isLoading,
  } = useGetUser(session as Session);
  const { mutate, isError, isSuccess } = usePostBoard();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      workspace: "",
    },
  });

  function handleClick() {
    console.log(form.values);
    if (session) {
      mutate({
        session,
        board: {
          name: form.values.name,
          description: form.values.description,
          workspaceId: form.values.workspace,
        },
      });
    }
  }
  return (
    <>
      <Select
        label="Your workspace"
        placeholder="Select a workspace"
        data={data?.workspaces.map((workspace)=>{
              return {value:workspace.id,label:workspace.name}
        })}
        {...form.getInputProps("workspace")}
      />

      <TextInput
        label="Board Title"
        description="Name of the board"
        placeholder="Best board in the world"
        {...form.getInputProps("name")}
      />
      <Divider m={"md"} />
      <Textarea
        label="Description"
        placeholder="Best description in the world"
        {...form.getInputProps("description")}
      />
      <Divider m={"md"} />

      <Button fullWidth onClick={handleClick}>
        Create Board
      </Button>
    </>
  );
}

type TaskProps = {
  taskName: string;
};

function Comments() {
  return (
    <Paper shadow="xl" p={"xl"}>
      Comment
    </Paper>
  );
}

function CommentList() {
  return (
    <Box my={"lg"}>
      <ScrollArea h={"250px"}>
        {" "}
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollArea>
    </Box>
  );
}

function Sidebar() {
  return (
    <>
      <Title order={6}>Add</Title>
      <Stack gap={"8px"} mt={"4px"}>
        <Button size="xs">Member</Button>
        <Button size="xs">Deadline</Button>
      </Stack>
    </>
  );
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
        <div style={{ flexGrow: 0.25 }}>
          <Sidebar />
        </div>
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
