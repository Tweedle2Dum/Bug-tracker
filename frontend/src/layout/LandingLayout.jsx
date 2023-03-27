import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Box, Spacer } from "@chakra-ui/react";
export default function LandingLayout() {
  return (
    <div className="root-layout">
      <Box
        
        minHeight="100vh"
        minWidth="100vw"
        
      >
        <Header />
      <Spacer height={["24px","24px","24px","24px"]} />  
        <Outlet />
      </Box>
    </div>
  );
}
