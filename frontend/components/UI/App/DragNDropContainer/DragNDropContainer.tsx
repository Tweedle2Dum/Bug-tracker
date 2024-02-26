"use client";
import { useEffect, useState } from "react";
import DragNDropColumn from "../DragNDropColumn/DragNDropColumn";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Button, ScrollArea, Box, Flex } from "@mantine/core";
import { Board, Columns } from "types";
import useCreateColumn from "components/Hooks/API/useCreateColumn";
import { Empty } from "../Empty/Empty";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import useGetColumns from "components/Hooks/API/useGetColumn";
import { Column } from "types";
import Loading from "../LoadingOverlay/LoadingOverlay";
import Modals from "../Modal/Modal";
import { useDisclosure } from "@mantine/hooks";
type Props = { board: Board };

export default function DragNDropContainer(props: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  console.log("THis is the default selected board");
  console.log(props.board);
  const { data: session, status } = useSession();
  const { mutate, isError, data, isSuccess } = useCreateColumn();
  const {
    data: fetchData,
    isError: fetchError,
    isSuccess: fetchSuccess,
    isLoading: fetchLoading,
  } = useGetColumns(session as Session, props.board.id);
  function addList() {
    open();
  }
  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;
    if (destination === null) return;
    if (source.droppableId == destination.droppableId) return;
    console.log(source);
    console.log(destination);
    const sourceTask = source.index;
    const destinationTask = destination.index;
    console.log(sourceTask, destinationTask);
    const sourceColumn = fetchData?.columns.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = fetchData?.columns.find(
      (column) => column.id === destination.droppableId
    );
    console.log(sourceColumn);
    console.log(destinationColumn);
    if (!sourceColumn || !destinationColumn) return;
    const toMove = sourceColumn?.tasks.splice(sourceTask, 1)[0];
    console.log(toMove);
    if (toMove) {
      destinationColumn?.tasks.splice(destinationTask, 0, toMove);
    }
    console.log(destinationColumn);
    console.log(data);
  }

  return (
    <>
      <div style={{ marginTop: "40px", maxWidth: "90vw",minHeight:'80vh', display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ScrollArea scrollbars="x" w={"90%"} style={{ overflowX: "scroll" }}>
            <Box w={"100%"} display={"flex"} style={{ minWidth: "100%" }}>
              {fetchLoading ? (
                <Loading />
              ) : fetchSuccess ? (
                <>
                  <Box w={"100%"} display={"flex"} style={{ minWidth: "100%" }}>
                    {fetchData.columns.map((column, index) => (
                      <DragNDropColumn
                        key={column.id}
                        index={index}
                        column={column}
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
