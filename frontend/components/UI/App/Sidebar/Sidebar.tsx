"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  path?: string;
}

function NavbarLink({ icon: Icon, label, active, path }: NavbarLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname.endsWith(path as string));
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={() => {
          if (path !== undefined) {
            router.push(path);
          }
          if (path == undefined) {
            signOut({ redirect: true, callbackUrl: "/" });
          }
        }}
        className={classes.link}
        data-active={
          pathname.endsWith(path as string) ? active : false || undefined
        }
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", path: "/home" },
  { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      path={link.path}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" inverted size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
