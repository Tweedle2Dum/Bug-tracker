"use client";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Dropdown from "../NavLinkGroup/Dropdown";
import useGetUser from "components/Hooks/API/useGetUser";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { Avatar } from "@mantine/core";
import { Box } from "@mantine/core";
import { User } from "types";

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const { data: session, status } = useSession();
  const { data, isError, isPending, isSuccess }= useGetUser(
    session as Session
  );
  if (isSuccess) {
    console.log(data);
  }

  return (
    <header className={classes.header}>
      <Container miw={"100%"} className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          <Dropdown items={data?.workspaces ?? []} />
          <ButtonMenu />
        </Group>
        <Box ml={"auto"}>
          <Avatar color="cyan" radius={"xl"}>
            {data?.name.slice(0, 2).toUpperCase()}
          </Avatar>
        </Box>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
