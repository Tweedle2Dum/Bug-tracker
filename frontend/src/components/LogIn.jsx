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
  Center,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import {  useAuth } from "../context/AuthContext";

export default function LogIn() {
  const {login} = useAuth();
  const [isLoading, setisLoading] = useState(false);
  const [formError, setformError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setisLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      console.warn(e.message);
      setformError(e.message);
    }
    setisLoading(false);
  }
  return (
    <>
      
        <Card minW={"100%"} boxShadow={"2xl"}>
          <CardHeader>
            <Heading as={"h2"} display={"flex"} justifyContent={"center"}>
              Log In
            </Heading>
          </CardHeader>

          <CardBody display={"flex"} flexDir={"column"} gap={"16px"}>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" ref={emailRef} />
              <FormHelperText>We' ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl isRequired>
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
              isLoading={isLoading}
            >
              Submit
            </Button>
          </CardBody>
          <Center>
          {formError && <Alert status='error' display={"flex"} justifyContent={"center"}>
          <AlertIcon />
          {formError}
          </Alert>}
        </Center>
        </Card>
      
      {
        <Link as={NavLink} to="/signup">
          {" "}
          Don't have an account? Click here to Sign Up.
        </Link>
      }
    </>
  );
}
