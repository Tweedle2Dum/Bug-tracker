"use client";
import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from "@mantine/core";
import classes from "./Comment.module.css";

type Props = {
  userName: string;
  timestamp: string;
  commentText: string;
};
export default function Comment({ userName, timestamp, commentText }: Props) {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar color="cyan" alt={userName} radius="xl">
          {" "}
          {userName}
        </Avatar>
        <div>
          <Text fz="sm">{userName}</Text>
          <Text fz="xs" c="dimmed">
            {timestamp}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: `<p>${commentText}</p>`,
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}
