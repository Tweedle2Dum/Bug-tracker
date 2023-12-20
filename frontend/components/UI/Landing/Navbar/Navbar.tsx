'use client'
import { useState } from 'react';
import { Container, Group, Burger, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {MantineLogo} from '@mantinex/mantine-logo'
import { Button } from '@mantine/core';
import classes from './Navbar.module.css';
import { Flex } from '@mantine/core';
import { useRouter } from 'next/navigation';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/learn', label: 'Learn' },
];

export default function Navbar() {
  const router = useRouter()
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container fluid  className={classes.inner}>
      <MantineLogo size={28} />
        <Flex gap={5} m={'0 auto 0 auto'}  visibleFrom="xs">
          {items}
         
        </Flex>
        <Divider size={'xs'}/>
        <Group gap={4} visibleFrom='xs'>
              <Button variant="default" onClick={()=>{router.push('/auth/login')}}>Log in</Button>
            <Button onClick={()=>{router.push('/auth/register')}}>Sign up</Button>
          </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}