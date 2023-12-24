"use client";
import React from "react";
import { useState } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Text, Title, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Modals from "../Modal/Modal";
import Task from "../Task/Task";
import { TaskProps } from "../Task/Task";

type DragNDropColumnProps = {
  columnId: string;
  tasks: TaskProps[];
};



export default function DragNDropColumn({
  columnId,
  tasks,
}: DragNDropColumnProps) {
  console.log(tasks);
  return (
    <>
      <Box mih={"100%"} miw={'400px'} maw={'400px'}>
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
