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
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Draggable } from "@hello-pangea/dnd";
import { Task } from "types";


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
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <div>
                  <Text fz="sm">Jacob Warnhalter</Text>
                  <Text fz="xs" c="dimmed">
                    10 minutes ago
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
      />
    </>
  );
}
