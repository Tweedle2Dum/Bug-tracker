"use client";

import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./BoardNavbar.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

type BoardNavbarProps  = {
  items : Board[]
}

export function BoardNavbar({items}:BoardNavbarProps) {
  const [opened, { toggle }] = useDisclosure(false);

 

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
          BoardName
          <Dropdown/>
        </Group>

        <Group>
         
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}


import { Menu, Button, Text} from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { Board } from "types";

 function Dropdown() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="outline">Other boards</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
      </Menu.Dropdown>
    </Menu>
  );
}

