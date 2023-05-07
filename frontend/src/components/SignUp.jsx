import React, { useContext, useRef, useState } from "react";
import { FormErrorMessage, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { addNewUser } from "../firestore";

import {
  Alert,
  AlertIcon,
  Center,
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

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [formError, setformError] = useState("");
  const { signup, currentUser } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const passwordConfirmRef = useRef();

  function handleChange() {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setisError("The entered passwords do not match!");
    } else {
      setisError(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return;
    }

    setisLoading(true);
    signup(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        addNewUser(emailRef.current.value, usernameRef.current.value);
      })
      .then(() => {
        setisLoading(false);
      })
      .then(() => {
        navigate("/dashboard/home");
      })
      .catch((e) => {
        setisLoading(false);

        console.warn(e.message);
        setformError(e.message);
      });


     
     
      
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
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" ref={usernameRef} />
            <FormHelperText>Enter your username.</FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" ref={emailRef} />
            <FormHelperText>We' ll never share your email.</FormHelperText>
          </FormControl>

          <FormControl isRequired onChange={handleChange}>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
            <FormHelperText>Enter Password</FormHelperText>
          </FormControl>

          <FormControl isRequired isInvalid={isError} onChange={handleChange}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" ref={passwordConfirmRef} />
            <FormHelperText>Confirm your Password</FormHelperText>
            <FormErrorMessage>{isError}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isLoading}
            marginBottom={"20px"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardBody>
        <Center>
          {formError && (
            <Alert status="error" display={"flex"} justifyContent={"center"}>
              <AlertIcon />
              {formError}
            </Alert>
          )}
        </Center>
      </Card>

      {
        <Link as={NavLink} to="/login">
          Already have an account? Click here to Login.
        </Link>
      }
    </>
  );
}
