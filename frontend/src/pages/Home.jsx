import { Container } from "@chakra-ui/react";
import React from "react";
import Cta from "../components/Cta"
import Features from "../components/Features";
export default function Home() {
  return (
      <Container marginTop={"20px"}  maxWidth={"6xl"}>
        <Cta />
        <Features />
      </Container>
  );
}