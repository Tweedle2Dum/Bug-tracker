"use client";
import React from "react";
import { Session } from "next-auth";
import { Droppable } from "@hello-pangea/dnd";
import {
  Paper,
  Stack,
  Text,
  Title,
  Box,
  Button,
  Flex,
  Modal,
} from "@mantine/core";
import Tasks from "../Task/Task";
import { Column, Task } from "types";
import { useDisclosure } from "@mantine/hooks";
import Modals from "../Modal/Modal";
import useGetAllTask from "components/Hooks/API/useGetTask";
import { useSession } from "next-auth/react";
import { Empty } from "../Empty/Empty";
import Loading from "../LoadingOverlay/LoadingOverlay";
type DragNDropColumnProps = {
  column: Column;
  index: number;
  tasks: Task[];
};

export default function DragNDropColumn({
  column,
  index,
  tasks,
}: DragNDropColumnProps) {
  const [opened, { open, close }] = useDisclosure(false);

  function handleClick() {
    open();
  }

  return (
    <>
      <Box mih={"60vh"} miw={"400px"} maw={"400px"}>
        <Paper shadow="xs" p="xl" pt={"0"} miw={"300px"}>
          <Title mb={"md"} order={4}>
            {" "}
            {column.name.toUpperCase()}
          </Title>
          <Droppable droppableId={index.toString()} type="TASK">
            {(provided, snapshot) => (
              <>
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ height: "100%" }}
                >
                  <Stack gap={"md"}>
                    {tasks.map((task, taskIndex) => (
                      <Tasks key={task.id} index={taskIndex} {...task} />
                    ))}
                  </Stack>
                </div>
                {provided.placeholder}
              </>
            )}
          </Droppable>
          <Flex display={"flex"} justify={"center"} pt={"20px"}>
            <Button
              variant="fill"
              onClick={handleClick}
              style={{ margin: "0 10px" }}
            >
              Add Task
            </Button>
          </Flex>
          <Modals
            open={open}
            opened={opened}
            close={close}
            columnId={column.id}
            contentType="AddTask"
          />
        </Paper>
      </Box>
    </>
  );
}
