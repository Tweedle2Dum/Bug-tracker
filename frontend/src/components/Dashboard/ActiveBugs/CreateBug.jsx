import React from "react";
import { useState, useRef, useEffect } from "react";
import FormError from "../../FormError";
import { Select, flatten } from "@chakra-ui/react";
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
import { createNewBug } from "../../../utils";
export default function CreateBug({ organizations, projects }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setisLoading] = useState();
  const [formError, setformError] = useState();

  const nameRef = useRef(null);
  const commentRef = useRef(null);
  const orgRef = useRef(null);
  const projRef = useRef(null);
  const severityRef = useRef(null);

  async function handleSubmit() {
    try {
      setisLoading(true);
      const bug = await createNewBug(
        orgRef.current.value,
        projRef.current.value,
        nameRef.current.value,
        severityRef.current.value,
        commentRef.current.value
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
    {
      console.log(projects)
    }
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize={"24px"}>
              Enter the details about the bug.
            </Heading>
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1em"}>
            <FormControl isRequired>
              <FormLabel>Organization</FormLabel>
              <Select placeholder="Select the organization" ref={orgRef}>
                {" "}
                {/*render a list here*/}
                {organizations &&
                  organizations.map((organization) => {
                    return (
                      <option key={organization.Id} value={organization.Id}>
                        {organization.Name}
                      </option>
                    );
                  })}
              </Select>
              <FormHelperText>
                Select the organization which the bug belongs to.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Select the project</FormLabel>
              <Select placeholder="Select the project" ref={projRef}>
                {projects &&
                  projects.map((project) => {
                    return (
                      <option key={project.name} value={`${project.projId},${project.name}`}>
                        {project.name}
                      </option>
                    );
                  })}
              </Select>

              <FormHelperText>
                Select the project in which the bug exists.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Enter type</FormLabel>
              <Input type="text" ref={nameRef} />

              <FormHelperText>
                Keywords to characterize the type of bug.
              </FormHelperText>
            </FormControl>
            <Divider orientation="horizontal"></Divider>

            <FormControl isRequired>
              <FormLabel>Select the severity of the bug</FormLabel>
              <Select placeholder="Select the severity" ref={severityRef}>
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
              </Select>

              <FormHelperText>
                How urgent the bug needs to be dealth with.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Comments</FormLabel>
              <Textarea resize={"none"} ref={commentRef} />
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
