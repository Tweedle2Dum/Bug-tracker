import { useState } from "react";
import { Button, Menu, Text, rem, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
} from "@tabler/icons-react";
import Modals from "../Modal/Modal";



export default function ButtonMenu({}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [contentType, setContentType] = useState<'Workspace' | 'Board' | ''>("");
  const theme = useMantineTheme();
  return (
    <>
      <Menu
        transitionProps={{ transition: "pop-top-right" }}
        position="top-end"
        width={220}
        withinPortal
      >
        <Menu.Target>
          <Button
            rightSection={
              <IconChevronDown
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            pr={12}
          >
            Create new
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={() => {
              open();
              setContentType("Workspace");
            }}
            leftSection={
              <IconPackage
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + P
              </Text>
            }
          >
            Workspace
          </Menu.Item>

          <Menu.Item
            onClick={() => {
              open();
              setContentType("Board");
            }}
            leftSection={
              <IconUsers
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.cyan[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + U
              </Text>
            }
          >
            Board
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconCalendar
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.violet[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + E
              </Text>
            }
          >
            Event
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modals
        opened={opened}
        open={open}
        close={close}
        contentType={contentType}
      />
    </>
  );
}
