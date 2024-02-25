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


export default function Task(props: Task) {
  const [opened, { open, close }] = useDisclosure(false);
  const [contentType, setContentType] = useState<
    "Workspace" | "Board" | "Task" | ""
  >("");
  return (
    <>
      <Draggable draggableId={props.id} index={index as number}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => {
              setContentType("Task");
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
                <div
                  className={classes.content}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
                  }}
                />
              </TypographyStylesProvider>
            </Paper>
          </Box>
        )}
      </Draggable>
      <Modals
        opened={opened}
        open={open}
        close={close}
        contentType={contentType}
      />
    </>
  );
}
