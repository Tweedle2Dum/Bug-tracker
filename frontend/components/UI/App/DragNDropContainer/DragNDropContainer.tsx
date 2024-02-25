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

type Props = { board: Board | null };

export default function DragNDropContainer(props: Props) {
  console.log(props.board);
  const { data: session, status } = useSession();
  const [columns, setColumns] = useState(props.board?.columns ?? []);
  const { mutate, isError, data, isSuccess } = useCreateColumn();

  function addList() {
    mutate({
      column: { name: "Test", boardId: props.board?.id as string },
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
    const sourceColumn = columns.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = columns.find(
      (column) => column.id === destination.droppableId
    );
    console.log(sourceColumn);
    console.log(destinationColumn);
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
              {columns.map((column) => (
                <DragNDropColumn key={column.id} columnId={column.id} />
              ))}

              <Button
                variant="fill"
                onClick={addList}
                style={{ margin: "0 10px" }}
              >
                Add Column
              </Button>
              {columns ? <Empty content="column" /> : null}
            </Box>
          </ScrollArea>
        </DragDropContext>
      </div>
    </>
  );
}
