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
import { addNewOrganization } from "../../../utils";

export default function CreateOrganization() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setisLoading] = useState();
  const [formError, setformError] = useState();
  const nameRef = useRef(null);
  const introRef = useRef(null);
  const Droparea = useRef(null);

  async function handleSubmit() {
    try {
      setisLoading(true);
      const update = await addNewOrganization(
        nameRef.current.value,
        introRef.current.value
      );
      setisLoading(false);
    } catch (e) {
      console.warn(e);
      setformError(e.message);
      setisLoading(false);
    }
  }

  function handleClick() {
    onOpen();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize={"24px"}>
              Enter the details of your organization.
            </Heading>
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1em"}>
            <FormControl display={"flex"} justifyContent={"center"}>
              <FormLabel
                height={"200px"}
                width={"300px"}
                outline={"dashed"}
                outlineColor={"#cccccc"}
                borderRadius={"12px"}
                ref={Droparea}
              >
                <Center flexDir={"column"} gap={"2em"} margin={"8px"}>
                  <Text>Drop Image here!</Text>
                  OR
                  <Input
                    paddingTop={"10px"}
                    type="file"
                    accept="image/*"
                    borderRadius={"12px"}
                    height={"50px"}
                    textAlign={"center"}
                  />
                </Center>
              </FormLabel>
            </FormControl>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Enter name</FormLabel>
              <Input type="text" ref={nameRef} />

              <FormHelperText>Name of the organization</FormHelperText>
            </FormControl>
            <Divider orientation="horizontal"></Divider>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Tell us something about the organization</FormLabel>
              <Textarea resize={"none"} ref={introRef} />
              <FormHelperText>
                Lil tidbit for your organization profile!
              </FormHelperText>
            </FormControl>
          </ModalBody>
          <Center>
            <FormError message={formError} />
          </Center>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              isLoading={isLoading}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button size={"lg"} colorScheme="blue" onClick={handleClick}>
        Create Organization
      </Button>
    </>
  );
}
