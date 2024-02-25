"use client";

import { Autocomplete, Group, Burger, rem, Box } from "@mantine/core";
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

type BoardNavbarProps = {
  items: Board[];
  setBoard: Dispatch<SetStateAction<Board | null>>;
  selectedBoard: Board | null
};

export function BoardNavbar({ items, setBoard,selectedBoard }: BoardNavbarProps) {
  const [opened, { toggle }] = useDisclosure(false);
  console.log(items);

    useEffect(()=>{
        if(selectedBoard!==null && items.length>0){
        setBoard(items[0])

        }
    },[])

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
          {selectedBoard === null ? (items.length > 0 ? items[0].name : "") : selectedBoard.name}
          <Dropdown items={items} setBoard={setBoard} />
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

import { Menu, Button, Text } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { Board } from "types";
import { Dispatch, SetStateAction, useEffect } from "react";
type DropDownProps = {
  items: Board[];
  setBoard: Dispatch<SetStateAction<Board | null>>;
};

function Dropdown({ items, setBoard }: DropDownProps) {
  console.log("Inside dropdown component");
  console.log(items);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="outline">Other boards</Button>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map((board, index) => (
          <Menu.Item
            key={index}
            onClick={() => {
              const id = board.id;
              setBoard(board);
            }}
          >
            <Box>{board.name}</Box>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
