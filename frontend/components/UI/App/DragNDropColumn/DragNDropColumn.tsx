"use client";
import React from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Text, Title, Box } from "@mantine/core";

type TaskProps = { id: string; title: string; content: string,index?:number };
type DragNDropColumnProps = {
  columnId: string;
  tasks: TaskProps[];
};

function Task({ id, title, content,index }: TaskProps) {
  return (
    <>
      <Draggable draggableId={id} index={index as number}>
        {(provided,snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
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
    </>
  );
}

export default function DragNDropColumn({
  columnId,
  tasks,
}: DragNDropColumnProps) {
  console.log(tasks)
  return (
    <>
      <Paper>
        <Title mb={"md"} order={4}>
          {" "}
          {columnId.toUpperCase()}
        </Title>

        <Droppable droppableId={columnId} type="TASK">
          {(provided, snapshot) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps} >
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
    </>
  );
}
