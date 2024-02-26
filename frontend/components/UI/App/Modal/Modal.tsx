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
import { FormEvent, useState } from "react";
import usePostWorkspace from "components/Hooks/API/useCreateWorkspace";
import { useSession } from "next-auth/react";
import usePostBoard from "components/Hooks/API/useCreateBoard";
import useGetUser from "components/Hooks/API/useGetUser";
import { Session } from "next-auth";
import usePostColumn from "components/Hooks/API/useCreateColumn";
import useCreateTask from "components/Hooks/API/useCreateTask";

function WorkspaceForm() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutate, isSuccess, isError } = usePostWorkspace();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading((prevState) => !prevState);
    try {
      if (session) {
        mutate({
          session,
          workspace: {
            name: form.values.name,
            description: form.values.description,
          },
        });
      }
    } finally {
      setIsLoading((prevState) => !prevState);
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
        <Button fullWidth type="submit" loading={isLoading}>
          Create workspace
        </Button>
      </form>
    </>
  );
}

function BoardForm() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    data,
    isError: getError,
    isSuccess: getSuccess,
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
    setIsLoading((prevState) => !prevState);
    try {
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
    } finally {
      setIsLoading((prevState) => !prevState);
    }
  }

  return (
    <>
      <Select
        label="Your workspace"
        placeholder="Select a workspace"
        data={data?.workspaces.map((workspace) => {
          return { value: workspace.id, label: workspace.name };
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

      <Button fullWidth onClick={handleClick} loading={isLoading}>
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

function ColumnForm(boardId: string) {
  const { data: session, status } = useSession();
  console.log(boardId);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    data,
    isError: getError,
    isSuccess: getSuccess,
  } = useGetUser(session as Session);
  const { mutate, isError, isSuccess } = usePostColumn();
  const form = useForm({
    initialValues: {
      name: "",
    },
  });

  function handleClick() {
    console.log(form.values);
    setIsLoading((prevState) => !prevState);
    try {
      if (session) {
        mutate({
          session,
          column: {
            name: form.values.name,
            boardId: boardId,
          },
        });
      }
    } finally {
      setIsLoading((prevState) => !prevState);
    }
  }

  return (
    <>
      <TextInput
        label="Column Title"
        description="Name of the Column"
        placeholder="Best Column in the world"
        {...form.getInputProps("name")}
      />
      <Divider m={"md"} />

      <Divider m={"md"} />

      <Button fullWidth onClick={handleClick} loading={isLoading}>
        Create Column
      </Button>
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

type AddTaskFormProps = {
  columnId:string
}
function AddTaskForm(props:AddTaskFormProps) {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    data,
    isError: getError,
    isSuccess: getSuccess,
  } = useGetUser(session as Session);
  const { mutate, isError, isSuccess } = useCreateTask();
  const form = useForm({
    initialValues: {
      name: "",
    },
  });

  function handleClick() {
    console.log(form.values);
    setIsLoading((prevState) => !prevState);
    try {
      if (session) {
        mutate({
          session,
          
        });
      }
    } finally {
      setIsLoading((prevState) => !prevState);
    }
  }

  return (
    <>
      <TextInput
        label="Column Title"
        description="Name of the Column"
        placeholder="Best Column in the world"
        {...form.getInputProps("name")}
      />
      <Divider m={"md"} />

      <Divider m={"md"} />

      <Button fullWidth onClick={handleClick} loading={isLoading}>
        Create Column
      </Button>
    </>
  );
}

type ModalProps = {
  opened: boolean;
  open: () => void;
  close: () => void;
  contentType: "Workspace" | "Board" | "Task" | "Column" | "AddTask";
  taskName?: string;
  boardID?: string;
  columnId?: string;
};
export default function Modals({
  opened,
  open,
  close,
  contentType,
  taskName,
  boardID,
  columnId
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
        ) : contentType === "Column" ? (
          <ColumnForm boardId={boardID as string} />
        ) : contentType === "AddTask" ? (
          <AddTaskForm columnId={columnId as string} />
        ) : null}
      </Modal>
    </>
  );
}
