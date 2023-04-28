import React from "react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Link,
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
import { AuthProvider } from "../context/AuthContext";

export default function LogIn() {

  const [isError,setisError] = useState()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <AuthProvider>
        <Card minW={"100%"} boxShadow={"2xl"}>
          <CardHeader>
            <Heading as={"h2"} display={"flex"} justifyContent={"center"}>
              Log In
            </Heading>
          </CardHeader>

          <CardBody display={"flex"} flexDir={"column"} gap={"16px"}>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" ref={emailRef} />
              <FormHelperText>We' ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl isRequired isInvalid={isError}>
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={passwordRef} />
              <FormHelperText>Enter Password</FormHelperText>
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
      </AuthProvider>
      {
        <Link as={NavLink} to="/signup">
          {" "}
          Don't have an account? Click here to Sign Up.
        </Link>
      }
    </>
  );
}
