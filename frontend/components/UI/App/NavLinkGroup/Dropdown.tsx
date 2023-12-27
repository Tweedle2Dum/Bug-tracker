import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";

interface DropdownList<T extends { name: string }> {
  items: T[];
}

export default function Dropdown<T extends { name: string }>({
  items = [],
}: DropdownList<T>) {
  console.log("Inside dropdown menu", items);

  const MenuItems = items.map((item, index) => {
    return (
      <Menu.Item
        key={index}
        leftSection={
          <IconSettings style={{ width: rem(14), height: rem(14) }} />
        }
      >
        {item.name}
      </Menu.Item>
    );
  });

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="outline">My Workspaces</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {items && items.length > 0 ? (
          MenuItems
        ) : (
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            No workspaces
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
