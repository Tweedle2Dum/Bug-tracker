"use client";
import { useState } from "react";
import DragNDropColumn from "../DragNDropColumn/DragNDropColumn";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Button, ScrollArea, Box, Flex } from "@mantine/core";

const dummyData = [
  {
    columnId: "column1",
    tasks: [
      { id: "1", title: "Task 1", content: "Task 1 Content" },
      { id: "2", title: "Task 2", content: "Task 2 Content" },
      { id: "3", title: "Task 3", content: "Task 3 Content" },
    ],
  },
  {
    columnId: "column2",
    tasks: [
      { id: "4", title: "Task 4", content: "Task 4 Content" },
      { id: "5", title: "Task 5", content: "Task 5 Content" },
      { id: "6", title: "Task 6", content: "Task 6 Content" },
    ],
  },
  {
    columnId: "column3",
    tasks: [
      { id: "7", title: "Task 7", content: "Task 7 Content" },
      { id: "8", title: "Task 8", content: "Task 8 Content" },
      { id: "9", title: "Task 9", content: "Task 9 Content" },
    ],
  },
  
];

export default function DragNDropContainer() {
  const [data, setData] = useState(dummyData);

  function addList() {
    setData([...dummyData, { columnId: "new  1 list", tasks: [] }]);
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
    const sourceColumn = data.find(
      (column) => column.columnId === source.droppableId
    );
    const destinationColumn = data.find(
      (column) => column.columnId === destination.droppableId
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
          <ScrollArea scrollbars="x" w={"90%"} style={{ overflowX:'scroll' }}>
            <Box w={"100%"} display={"flex"} style={{ minWidth: '100%' }}>
              {data.map((column) => (
                <DragNDropColumn
                  key={column.columnId}
                  columnId={column.columnId}
                  tasks={column.tasks}
                  
                />
              ))}

              <Button variant="fill" onClick={addList} style={{ margin: '0 10px' }}>
                Add another list
              </Button>
            </Box>
          </ScrollArea>
        </DragDropContext>
      </div>
    </>
  );
}
