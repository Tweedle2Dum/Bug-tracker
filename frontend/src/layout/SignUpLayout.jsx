import React from "react";
import { Container,Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useAuth,AuthProvider } from "../context/AuthContext";

export default function SignUpLayout() {
  return (
    <>
     
      <Container maxW="xl" minH="75vH" display="flex" alignItems={"center"}>
        <Center flex={"1 1 auto"}>
        <Outlet />
        </Center>
        
      </Container>
      
      
    </>
  );
}
