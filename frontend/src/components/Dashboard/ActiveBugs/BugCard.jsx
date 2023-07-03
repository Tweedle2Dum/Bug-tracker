import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function BugCard({ name, severity, proj, comments }) {
  return (
    <>
      <Alert
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeighteight="200px"
        margin={"20px 0"}
        colorScheme={"green"}
        borderRadius={"12px"}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Project: {proj}
          <br />
          Name: {name}
        </AlertTitle>

        <AlertDescription maxWidth="sm" padding={"20px"}>
          Description: {comments}{" "}
          <br/>
          Severity: {severity}
        </AlertDescription>
        <Button colorScheme={"blue"}>Mark as Done</Button>
      </Alert>
    </>
  );
}
