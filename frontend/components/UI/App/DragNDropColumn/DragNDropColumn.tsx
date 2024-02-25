"use client";
import React from "react";
import {  Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Text, Title, Box } from "@mantine/core";
import { Task } from "types";

type DragNDropColumnProps = {
  columnId: string;
};



export default function DragNDropColumn({
  columnId,
}: DragNDropColumnProps) {
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
                    {/* Render tasks */}
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
