import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";

export default function Dropdown() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="outline">My Workspaces</Button>
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
        <Menu.Label>Current Workspace</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Workspaces
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
