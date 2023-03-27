import React from "react";
import { Flex, Box, Button, Link, Text } from "@chakra-ui/react";
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
          <Box position={"relative"}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height={"100px"}>
              <path
                fill="#24A148"
                d="M41.2,-60C52.5,-48.4,60.3,-35.3,62.6,-21.8C64.9,-8.4,61.7,5.3,54.2,14.3C46.7,23.3,34.9,27.6,25.2,39.4C15.5,51.2,7.7,70.4,-5.4,77.8C-18.5,85.2,-36.9,80.7,-43,67.7C-49.1,54.8,-42.9,33.3,-36.7,19.7C-30.5,6,-24.4,0,-24.1,-9.9C-23.7,-19.9,-29.2,-33.8,-26.2,-48.1C-23.1,-62.4,-11.6,-77,1.7,-79.3C14.9,-81.6,29.8,-71.6,41.2,-60Z"
                transform="translate(100 100)"
              />
            </svg>
            <Text position={"absolute"} top="50%" transform={"translate(25%,-50%)"} fontSize="28px">Tracker</Text>
          </Box>
          <Box marginLeft="auto">
            <Link as={NavLink} to="/howitworks">
              How it works
            </Link>
          </Box>

          <Link as={NavLink} to="/about">
            About
          </Link>

          <Button colorScheme="green" size={"lg"}>
            Log In
          </Button>
        </Flex>
      </header>
    </>
  );
}
