import React from "react";
import {
  Flex,
  Box,
  Button,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();




  return (
    <>
      <header>
        <Flex
          position={"relative"}
          as="nav"
          height={100}
          alignItems="center"
          gap="16"
          fontSize={24}
          boxShadow={"2xl"}
          px="12px"
          borderRadius={"12px"}
        >
          <Box position={"relative"}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              height={"100px"}
            >
              <path
                fill="#43A4F3"
                d="M41.2,-60C52.5,-48.4,60.3,-35.3,62.6,-21.8C64.9,-8.4,61.7,5.3,54.2,14.3C46.7,23.3,34.9,27.6,25.2,39.4C15.5,51.2,7.7,70.4,-5.4,77.8C-18.5,85.2,-36.9,80.7,-43,67.7C-49.1,54.8,-42.9,33.3,-36.7,19.7C-30.5,6,-24.4,0,-24.1,-9.9C-23.7,-19.9,-29.2,-33.8,-26.2,-48.1C-23.1,-62.4,-11.6,-77,1.7,-79.3C14.9,-81.6,29.8,-71.6,41.2,-60Z"
                transform="translate(100 100)"
              />
            </svg>
            <Text
              position={"absolute"}
              top="50%"
              transform={"translate(25%,-50%)"}
              fontSize="28px"
            >
              Tracker
            </Text>
          </Box>

          <Box marginLeft={"auto"} display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}} alignItems="center" gap="16">
            <Box>
              <Link as={NavLink} to="/">
                Home
              </Link>
            </Box>

            <Box>
              <Link as={NavLink} to="/howitworks">
                How it works
              </Link>
            </Box>

            <Box>
              <Link as={NavLink} to="/about">
                About
              </Link>
            </Box>
            <Button  colorScheme="blue" size={"lg"}>
              <Link as={NavLink} to="/login" textDecor={"none"} size={"lg"}padding={"100%"}>Log In</Link>
            </Button>
          </Box>

          {/* <Button position={"absolute"} right="10" colorScheme={"blue"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              height={"24px"}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </Button> */}
          <Button
            ref={btnRef}
            colorScheme="blue"
            onClick={onOpen}
            position="absolute"
            right={"10"}
            display = {{md:"none"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              height={"24px"}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <Box
                  height={"100%"}
                  width="100%"
                  display={"flex"}
                  flexDir="column"
                  justifyContent={"center"}
                  gap="20px"
                >
                  <Box fontSize={"24px"}>
                    <Link as={NavLink} to="/">
                      Home
                    </Link>
                  </Box>

                  <Box fontSize={"24px"}>
                    <Link as={NavLink} to="/howitworks">
                      How it works
                    </Link>
                  </Box>

                  <Box fontSize={"24px"}>
                    <Link as={NavLink} to="/about">
                      About
                    </Link>
                  </Box>

                  <Button colorScheme="blue" size={"lg"}>
                    Log In
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </header>
    </>
  );
}
