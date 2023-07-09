import React from "react";
import { useState, useRef, useEffect } from "react";
import FormError from "../../FormError";
import {
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Divider,
  Textarea,
  Center,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";

export default function UseInviteCode() {
    
const { isOpen, onOpen, onClose } = useDisclosure();
const inputRef = useRef(null);

function handleClick() {
  onOpen();
}


async function handleSubmit(){
    
}



return (
  <>
     <Button colorScheme={"blue"} size={"sm"} onClick={handleClick}>Use Invite Code</Button>
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter the secret code</ModalHeader>
        <ModalBody
          display={"flex"}
          flexDir={"column"}
          gap={"1em"}
        ></ModalBody>
        <Center flexDirection={"column"}>
          <Box maxW={"75%"}>
         
              <FormControl display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"12px"} marginTop={"20px"}>
            <Input ref={inputRef} ></Input>
            <FormHelperText>
                  Type the code here
              </FormHelperText>
              </FormControl>
          </Box>
        </Center>

        <ModalFooter>
            <Button size={"md"} colorScheme="blue">Join</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
 
}
