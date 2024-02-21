'use client'
import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './Empty.module.css';


type IProps = {
  content : string
}

export function Empty(props:IProps) {
  return (
    <Container className={classes.root}>
      <div className={classes.label}></div>
      <Title className={classes.title}>Looks like you dont have any {props.content} right now :(</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
       Let's get started! Click on create {props.content} to get one ready !
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md">
          Create {props.content}
        </Button>
      </Group>
    </Container>
  );
}