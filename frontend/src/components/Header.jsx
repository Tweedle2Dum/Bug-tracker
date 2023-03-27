import React from "react";
import { Flex, Box, Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Flex
          as="nav"
          height={100}
          alignItems="center"
          gap="16"
          fontSize={24}
          boxShadow={"lg"}
          px="12px"
          borderRadius={"12px"}
        >
          <Box> Tracker</Box>
          <Box marginLeft="auto">
            <Link as={NavLink} to="/howitworks">How it works</Link>
          </Box>

          <Link as={NavLink} to="/about">About</Link>

          <Button colorScheme="green" size={"lg"}>
            Log In
          </Button>
        </Flex>
      </header>
    </>
  );
}
