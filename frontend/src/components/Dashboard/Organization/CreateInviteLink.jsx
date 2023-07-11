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
  Select,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function CreateInviteLink({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value,setValue] = useState("")
  const orgRef = useRef(null);

  function handleClick() {
    onOpen();
  }



  function handleChange(){
    setValue(orgRef.current.value)

  }

  return (
    <>
    
      <Button onClick={handleClick} size={"sm"} colorScheme={"blue"}>
        Create Invite Code
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an Invite Code for an organization</ModalHeader>
          <ModalBody
            display={"flex"}
            flexDir={"column"}
            gap={"1em"}
          ></ModalBody>
          <Center flexDirection={"column"}>
            <Box maxW={"75%"}>
              <FormControl>
                <Select placeholder="Select the organization" ref={orgRef} onChange={handleChange}>
                  {" "}
                  {/*render a list here*/}
                  {data &&
                    data.map((organization) => {
                      return (
                        <option value={organization.Id} key={organization.Id}>
                          {organization.Name}
                        </option>
                      );
                    })}
                </Select>
             
              </FormControl>
                <FormControl display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"12px"} marginTop={"20px"}>
              <Input isDisabled={true} value={value}></Input>
              <FormHelperText>
                    Here is the secret code
                </FormHelperText>
                </FormControl>
            </Box>
          </Center>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
