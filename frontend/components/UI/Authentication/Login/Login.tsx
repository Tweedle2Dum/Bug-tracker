"use client";
import {
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  TextInput,
} from "@mantine/core";
import classes from "./Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading((prevState) => !prevState);

    try {
      const res = await signIn("credentials", {
        email: form.values.email,
        password: form.values.password,
        redirect: false,
      });
      console.log(res);
      if (res?.ok === false) {
        const message = JSON.parse(res.error as string);
        form.setFieldError("password", message.errors);
        return;
      }
      router.push("/home");
    } finally {
      setIsLoading((prevState) => !prevState);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          <Link href={"/auth/register"}>Create account</Link>
        </Anchor>
      </Text>

      <form onSubmit={handleSubmit}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
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
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              <Link href={"/auth/reset"}>Forgot password?</Link>
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={isLoading}>
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
