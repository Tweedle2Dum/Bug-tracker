"use client";
import DragNDropColumn from "../DragNDropColumn/DragNDropColumn";
import { DragDropContext } from "@hello-pangea/dnd";

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
  function onDragEnd(){

  }
  
  return (

   <>
    <DragDropContext onDragEnd={onDragEnd}>
          <div style={{display:'flex', gap:'40px'}}>
          {dummyData.map((column) => (
            <DragNDropColumn key={column.columnId} {...column} />
          ))}
          </div>
    </DragDropContext>
   </>
  );
}
