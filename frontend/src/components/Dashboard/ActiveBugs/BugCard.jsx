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

export default function BugCard({ name, severity, proj, comments,status,orgId,projId }) {
  let state ; 
  let disabled ; 
  const oId = orgId;
  const pId = projId ;
/*   console.log(status)
 */    if (status=="pending"){
        state = "red"
        disabled = false ;
    }
    else
    {
      state = "green"
      disabled = true ;
    }


  

    
  return (
    <>
      <Alert
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="200px"
        margin={"20px 0"}
        colorScheme={state}
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
        <Button colorScheme={"blue"} isDisabled={disabled}>Mark as Done</Button>
      </Alert>
    </>
  );
}
