"use client";
import { useEffect, useState } from "react";
import DragNDropColumn from "../DragNDropColumn/DragNDropColumn";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Button, ScrollArea, Box, Flex } from "@mantine/core";
import { Board, Column, Columns } from "types";
import useCreateColumn from "components/Hooks/API/useCreateColumn";
import { Empty } from "../Empty/Empty";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import useGetColumns from "components/Hooks/API/useGetColumn";
import Loading from "../LoadingOverlay/LoadingOverlay";
import Modals from "../Modal/Modal";
import { useDisclosure, useListState } from "@mantine/hooks";
type Props = { board: Board };


export default function DragNDropContainer(props: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [state, handlers] = useListState<Column>();
  console.log("THis is the default selected board");
  console.log(props.board);
  const { data: session, status } = useSession();
  const {
    data: fetchData,
    isError: fetchError,
    isSuccess: fetchSuccess,
    isLoading: fetchLoading,
  } = useGetColumns(session as Session, props.board.id);
  useEffect(() => {
    if (fetchSuccess) {
      console.log(fetchData)
      handlers.setState(fetchData.columns)
    }
  }, [fetchSuccess, fetchData]);
  console.log("THis is state", state);
  function addList() {
    open();
  }

  return (
    <>
      <div
        style={{
          marginTop: "40px",
          maxWidth: "90vw",
          minHeight: "80vh",
          display: "flex",
          gap:'50px'
        }}
      >
        <DragDropContext
          onDragEnd={({ destination, source }) => {
            if (!destination) return; // Do nothing if dropped outside the list
            const updatedState = [...state];
            const draggedColumnIndex = parseInt(source.droppableId);
            const droppedColumnIndex = parseInt(destination.droppableId);
            // If the task is moved within the same column
            if (draggedColumnIndex === droppedColumnIndex) {
              const column = updatedState[draggedColumnIndex];
              const [draggedTask] = column.tasks.splice(source.index, 1);
              column.tasks.splice(destination.index, 0, draggedTask);
            } else {
              // If the task is moved to a different column
              const [draggedTask] = updatedState[draggedColumnIndex].tasks.splice(source.index, 1);
              updatedState[droppedColumnIndex].tasks.splice(destination.index, 0, draggedTask);
            }

            handlers.setState(updatedState);
          }}
        >
          <ScrollArea scrollbars="x" w={"90%"} style={{ overflowX: "scroll" }}>
            <Box w={"100%"} display={"flex"} style={{ minWidth: "100%" }}>
              {fetchLoading ? (
                <Loading />
              ) : fetchSuccess ? (
                <>
                  <Box w={"100%"} display={"flex"} mx={'20px'} style={{ minWidth: "100%" }}>
                    {state.map((column, index) => (
                      <DragNDropColumn
                        key={column.id}
                        index={index}
                        column={column}
                        tasks={column.tasks}
                      />
                    ))}
                  </Box>

                  <Modals
                    opened={opened}
                    open={open}
                    close={close}
                    contentType="Column"
                    boardID={props.board.id}
                  />
                </>
              ) : (
                <Empty content="column" />
              )}
            </Box>
          </ScrollArea>
          <Button variant="fill" onClick={addList} style={{ margin: "0 10px" }}>
            Add Column
          </Button>
        </DragDropContext>
      </div>
    </>
  );
}
