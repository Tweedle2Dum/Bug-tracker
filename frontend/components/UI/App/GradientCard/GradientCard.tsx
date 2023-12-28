"use client";
import { Button, Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import classes from "./GradientCard.module.css";
import { useRouter } from "next/navigation";

type GradientCardProps = {
  name: string;
  description: string;
  id: string;
};

export function GradientCard({ name, description, id }: GradientCardProps) {
  const router = useRouter();
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      maw={"400px"}
      miw={"400px"}
      
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconColorSwatch
          style={{ width: rem(28), height: rem(28) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        {name}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        {description}
      </Text>
      <Button onClick={() => router.push(`/dashboard/${id}`)} mt={"20px"}>Open workspace</Button>
    </Paper>
  );
}
