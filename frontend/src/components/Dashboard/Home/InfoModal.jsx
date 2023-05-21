import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  CheckboxGroup,
  Flex,
  Textarea,
  Divider,
  Heading,
  Center
} from "@chakra-ui/react";
import { updateUserDetails } from "../../../utils";

export default function InfoModal({ userDetails }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setisLoading] = useState(false);
  const adminRef = useRef();
  const devRef = useRef();
  const introRef = useRef();
  const [formError,setformError] = useState();



  async function handleSubmit() {
    setisLoading(true);

    let role= "" ;
    if (adminRef.current.checked && devRef.current.checked){
        role = "both"
    }
    else if (adminRef.current.checked)
    {
      role = "admin"
    }
    else
    {
      role = "dev"
    }

    try {
      const update = await updateUserDetails(role,introRef.current.value)
      setisLoading(false);
      onClose();

    }
    catch(e){
      console.warm(e);
      setformError(e.message)
      setisLoading(false);


    }




  }

  useEffect(() => {
    if (userDetails.newUser === true) {
      onOpen();
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={"2xl"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize={"24px"}>
              Looks like this is your first time here, Please help us get things
              set up and running for you!
            </Heading>
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1em"}>
            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Select your role</FormLabel>
              <CheckboxGroup>
                <Checkbox ref={adminRef} id="admin" >
                  Administrator
                </Checkbox>
                <Checkbox id="dev" ref={devRef} >
                  Developer
                </Checkbox>
              </CheckboxGroup>

              <FormHelperText>
                Helps set up the perfect UI for you !
              </FormHelperText>
            </FormControl>
            <Divider orientation="horizontal"></Divider>

            <FormControl isRequired display={"flex"} flexDir={"column"}>
              <FormLabel>Tell us something about yourself</FormLabel>
              <Textarea ref={introRef} resize={"none"}></Textarea>

              <FormHelperText>Lil tidbit for your cool profile!</FormHelperText>
            </FormControl>
          </ModalBody>
          <Center>
          {formError && (
            <Alert status="error" display={"flex"} justifyContent={"center"}>
              <AlertIcon />
              {formError}
            </Alert>
          )}
        </Center>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit} isLoading={isLoading}>
              Let's Go!!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
