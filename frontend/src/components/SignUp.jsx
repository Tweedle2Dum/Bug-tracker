import React, { useRef,useState } from "react";
import { FormErrorMessage, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { FirebaseError } from "firebase/app";

export default function SignUp() {
  const [isError,setisError] = useState(false);
  const [formError,setformError] = useState("");
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
     if(passwordRef.current.value !== passwordConfirmRef.current.value)
    {
      setisError("The entered passwords do not match!")
      console.log("yolo")
      return;
    } 


    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      console.warn(e.message);
      setformError(e.FirebaseError)

    }
  }

  return (
    <>
      <Card minW={"100%"} boxShadow={"2xl"}>
        <CardHeader>
          <Heading as={"h2"} display={"flex"} justifyContent={"center"}>
            Sign Up
          </Heading>
        </CardHeader>

        <CardBody display={"flex"} flexDir={"column"} gap={"16px"}>
          <FormControl isRequired  >
            <FormLabel>Email Address</FormLabel>
            <Input type="email" ref={emailRef} />
            <FormHelperText>We' ll never share your email.</FormHelperText>
          </FormControl>

          <FormControl isRequired >
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
            <FormHelperText>Enter Password</FormHelperText>
          </FormControl>

          <FormControl isRequired isInvalid={isError}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" ref={passwordConfirmRef} />
            <FormHelperText>Confirm your Password</FormHelperText>
            <FormErrorMessage>{isError}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            size={"lg"}
            marginBottom={"20px"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardBody>
      </Card>

      {
        <Link as={NavLink} to="/login">
          Already have an account? Click here to Login.
        </Link>
      }
    </>
  );
}
