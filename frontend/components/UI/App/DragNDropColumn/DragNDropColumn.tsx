"use client";
import React from "react";
import { useState } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Text, Title, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Modals from "../Modal/Modal";

type TaskProps = { id: string; title: string; content: string; index?: number };
type DragNDropColumnProps = {
  columnId: string;
  tasks: TaskProps[];
};

function Task({ id, title, content, index }: TaskProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [contentType, setContentType] = useState<
    "Workspace" | "Board" | "Task" | ""
  >("");

  return (
    <>
      <Draggable draggableId={id} index={index as number}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => {
              setContentType("Task");
              open();
            }}
          >
            <Box
              style={{
                outline: "1px solid blue",
                padding: "4px 8px",
                borderRadius: "12px",
                display: "flex",
              }}
            >
              <Text>{content}</Text>
            </Box>
          </Box>
        )}
      </Draggable>
      <Modals
        opened={opened}
        open={open}
        close={close}
        contentType={contentType}
      />
    </>
  );
}

export default function DragNDropColumn({
  columnId,
  tasks,
}: DragNDropColumnProps) {
  console.log(tasks);
  return (
    <>
      <Box mih={"100%"}>
        <Paper shadow="xs" p="xl" pt={"0"} miw={"300px"}>
          <Title mb={"md"} order={4}>
            {" "}
            {columnId.toUpperCase()}
          </Title>
          <Droppable droppableId={columnId} type="TASK">
            {(provided, snapshot) => (
              <>
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ height: "100%" }}
                >
                  <Stack gap={"md"}>
                    {tasks.map((task, index) => (
                      <Task key={task.id} {...task} index={index} />
                    ))}
                  </Stack>
                </div>
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </Paper>
      </Box>
    </>
  );
}
