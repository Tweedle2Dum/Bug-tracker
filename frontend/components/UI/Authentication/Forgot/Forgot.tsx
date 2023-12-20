"use client";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./Forgot.module.css";
import { useForm } from "@mantine/form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "app/firebase";

export default function Forgot() {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function handleSubmit(e:React.FormEvent) {
    e.preventDefault()
    sendPasswordResetEmail(auth,form.values.email)
    console.log('Password reset mail sent!!')
  }
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <form onSubmit={handleSubmit}>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your email" placeholder="me@mantine.dev" required {...form.getInputProps('email')} />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor
              c="dimmed"
              size="sm"
              className={classes.control}
              href="/auth/login"
            >
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button className={classes.control} type="submit">Reset password</Button>
          </Group>
        </Paper>
      </form>
    </Container>
  );
}
