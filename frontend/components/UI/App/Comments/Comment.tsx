'use client'
import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import classes from './Comment.module.css';

export default function Comment() {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar
        color='cyan'
          alt="Jacob Warnhalter"
          radius="xl"
          
        > US</Avatar>
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
  );
}