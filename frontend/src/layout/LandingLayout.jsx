import React from "react";
import Header from "../components/LandingPage/Header";
import { Outlet } from "react-router-dom";
import { Box, Spacer } from "@chakra-ui/react";
export default function LandingLayout() {
  return (
    <div className="root-layout">
      <Box
        
        padding={"20px"}
      >
        <Header />
      <Spacer height={{base:"24px"}} />  
        <Outlet />
      </Box>
    </div>
  );
}
