"use client";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import {
  Container,
  Title,
  Text,
  Anchor,
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
import Link from "next/link";
import classes from "./Register.module.css";

type Props = {};

export default function Register({}: Props) {
  const router = useRouter();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      username:"",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        username:form.values.username,
        email: form.values.email,
        password: form.values.password,
      }),
    });
    const data = await res.json();
    if (res.status == 500) {
      console.log(data);
      return;
    }
    router.push("/auth/login");
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Hello there!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account ?{" "}
        <Anchor size="sm" component="button">
          <Link href={"/auth/login"}>Login</Link>
        </Anchor>
      </Text>

      <form onSubmit={handleSubmit}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
            label="Username"
            placeholder="tweedle2dum"
            required
            {...form.getInputProps("username")}
          />

          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            {...form.getInputProps("confirmPassword")}
          />

          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Create Account
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
