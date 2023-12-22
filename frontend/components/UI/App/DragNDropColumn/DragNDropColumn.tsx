"use client";
import React from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Text, Title, Box } from "@mantine/core";

type TaskProps = { id: string; title: string; content: string };
type DragNDropColumnProps = {
  columnId: string;
  tasks: TaskProps[];
};

function Task({ id, title, content }: TaskProps) {
  return (
    <>
      <Draggable draggableId={id} index={parseInt(id)}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
        </div>
      )}
      </Draggable>
    </>
  );
}

export default function DragNDropColumn({columnId,tasks}: DragNDropColumnProps) {
  return (
    <>
       <Droppable droppableId={columnId} type="TASK">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <Paper shadow="xs" p="xl" radius={"lg"}>
            <Title mb={"md"} order={4}>
              {columnId.toUpperCase()}
            </Title>
            <Stack gap={"md"}>
              {tasks.map((task, index) => (
                <Task key={task.id} {...task} />
              ))}
            </Stack>
          </Paper>
        </div>
      )}
    </Droppable>
    </>
  );
}
