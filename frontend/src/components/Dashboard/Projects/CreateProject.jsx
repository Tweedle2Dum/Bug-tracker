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
  Select
} from "@chakra-ui/react";
import { addNewProject } from "../../../utils";
import { v4 as uuidV4 } from "uuid";


export default function CreateProject({organizations,updaterFunction}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setisLoading] = useState();
  const [formError, setformError] = useState();
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const orgRef = useRef(null);



  


  async function handleSubmit() {
    try {
      setisLoading(true);
      await addNewProject(nameRef.current.value,orgRef.current.value,descRef.current.value)
      updaterFunction((prevState)=>{return prevState+1})
      setisLoading(false);
    } catch (e) {
      console.warn(e);
      setformError(e.message);
      setisLoading(false);
    }
  }

  function handleClick() {
/*     console.log("yolo");
 */    onOpen();
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
            

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Enter name</FormLabel>
              <Input type="text" ref={nameRef} />

              <FormHelperText>Name of the project</FormHelperText>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Select the Organization</FormLabel>
          <Select placeholder="Select the organization" ref={orgRef}  > {/*render a list here*/}
          {organizations && organizations.map((organization)=>{
            return (
              
              <option key={uuidV4()} value={organization.Id}>{organization.Name}</option>
            )
          })}
              {/* <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value = {"Low"}>Low</option> */}

            </Select>
            <FormHelperText>Select the organization which the bug belongs to.</FormHelperText>
            </FormControl>
            <Divider orientation="horizontal"></Divider>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Tell us something about the Project</FormLabel>
              <Textarea resize={"none"} ref={descRef} />
              <FormHelperText>
                Something about the project!
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
        Create a Project
      </Button>
    </>
  );
}
