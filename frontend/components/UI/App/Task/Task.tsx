"use client";
import {
  Paper,
  Group,
  Avatar,
  Text,
  TypographyStylesProvider,
  Box,
} from "@mantine/core";
import Modals from "../Modal/Modal";
import classes from "./Task.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Draggable } from "@hello-pangea/dnd";
import { Task } from "types";
import { getDateTime } from "utils";


export default function Task(props: Task & {index:number}) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Draggable draggableId={props.id} index={props.index as number}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => {
              open();
            }}
          >
            {/* content */}

            <Paper withBorder radius="md" className={classes.comment}>
              <Group>
                <Avatar
                  color="cyan"
                  alt={props.created_by}
                  radius="xl"
                />
                <div>
                  <Text fz="sm">{props.created_by}</Text>
                  <Text fz="xs" c="dimmed">
                    {getDateTime(props.created_at)}
                  </Text>
                </div>
              </Group>
              
              <TypographyStylesProvider className={classes.body}>
               
              {props.description}
              </TypographyStylesProvider>
            </Paper>
          </Box>
        )}
      </Draggable>
      <Modals
        opened={opened}
        open={open}
        close={close}
        contentType={'Task'}
        taskId={props.id}
        taskDescription={props.description}
      />
    </>
  );
}
