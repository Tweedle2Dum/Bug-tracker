import React from "react";
import { useState, useRef, useEffect } from "react";
import FormError from "../../FormError";
import { Select } from "@chakra-ui/react";
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

export default function CreateBug() {
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
    console.log("yolo");
    onOpen();
  }





  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize={"24px"}>
              Enter the details about the bug.
            </Heading>
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1em"}>
           
          <Select placeholder="Select the organization"  >
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value = {"Low"}>Low</option>

            </Select>
            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Enter type</FormLabel>
              <Input type="text" ref={nameRef} />

              <FormHelperText>Keywords to characterize the type of bug.</FormHelperText>
            </FormControl>
            <Divider orientation="horizontal"></Divider>
            <Select placeholder="Select the severity" >
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value = {"Low"}>Low</option>

            </Select>

           
            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Comments</FormLabel>
              <Textarea resize={"none"} ref={introRef} />
              <FormHelperText>
                Some additional information about the bug
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
        Create Bug Report
      </Button>
    </>
  );
}
