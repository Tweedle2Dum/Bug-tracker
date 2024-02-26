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
type Props = { board: Board };

export default function DragNDropContainer(props: Props) {
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
    mutate({
      column: { name: "Test", boardId: props.board.id },
      session: session as Session,
    });
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
      <div style={{ marginTop: "40px" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ScrollArea scrollbars="x" w={"90%"} style={{ overflowX: "scroll" }}>
            <Box w={"100%"} display={"flex"} style={{ minWidth: "100%" }}>
              {fetchLoading ? (
                <Loading />
              ) : fetchSuccess ? (
                fetchData.columns.map((column) => (
                  <DragNDropColumn key={column.id} columnId={column.id} />
                ))
              ) : null}

              <Button
                variant="fill"
                onClick={addList}
                style={{ margin: "0 10px" }}
              >
                Add Column
              </Button>
              {fetchData?.columns ? null : <Empty content="column" />}
            </Box>
          </ScrollArea>
        </DragDropContext>
      </div>
    </>
  );
}
