import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
export default function Cta() {
  return (
    <Box>
      <Flex wrap={"wrap"} justifyContent={"center"} gap={"5em"}>
        <Image flex={"1 1 auto"}
          boxShadow={"lg"}
          maxWidth={"520px"}
          minWidth={"320px"}
          objectFit={"fill"}
          borderRadius={"12px"}
          src="images/cta.jpg"
        ></Image>
        <Box maxW={"400px"} padding="20px" letterSpacing={"1px"}>
          <Heading>
            Tracker is here to help you keep track of all bugs and issues in
            your organisation!
          </Heading>
          <Text fontSize={["20", "24"]} marginTop="2em">
            Create, assign and prioritize all your important issues, improve
            productivity and stay on top of your game!
          </Text>
          <Center marginTop={"20px"}>
            <Button colorScheme={"blue"} size={"lg"} borderRadius="12px">
              Sign Up
            </Button>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
