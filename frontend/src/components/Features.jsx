import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Container,
  Center,
  Text,
} from "@chakra-ui/react";

export default function Features() {
  return (
    <>
      <Container marginTop={"10rem"} w="3xl">
        <Center>
          <Heading as={"h3"}>Features-</Heading>
        </Center>
      </Container>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        marginTop="5rem"
        justifyItems={"center"}
        gap="40px"
      >
        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} paddingBottom="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#43A4F3">
                <path d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" />
              </svg>
            </Box>
            Centralized list of bugs with priority
          </Heading>
          <Text></Text>
        </Box>
        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} padding="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#43A4F3">
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </Box>
            Notifications 
          </Heading>
          <Text></Text>
        </Box>

        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} padding="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#43A4F3">
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
              </svg>
            </Box>
            Connect all the developers of your organisation.
          </Heading>
          <Text></Text>
        </Box>
        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} padding="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#43A4F3">
                <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
              </svg>
            </Box>
            Status of the issue can be tracked by everyone in the organisation.
          </Heading>
          <Text></Text>
        </Box>
 
        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} padding="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#43A4F3">
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </Box>
            Quantitative Analysis of all the bugs through graphs and charts
          </Heading>
          <Text></Text>
        </Box>

        <Box width={"400px"} fontSize="24px" borderBottom={"1px solid grey"} padding="8px" borderRadius={"12px"} boxShadow={"2xl"}>
          <Heading as={"h3"} fontSize="24px" display={"flex"} gap={'20px'}>
            <Box minW={"40px"} maxW="40px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#43A4F3">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </Box>
            A coool unified dashboard!!
          </Heading>
          <Text></Text>
        </Box>
      </SimpleGrid>
    </>
  );
}
