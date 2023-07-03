import React from "react";
import { Box, Text, Link, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import SignOut from "../Auth/SignOut";
export default function Sidebar() {
  return (
    <Box
      display="flex"
      flexDir={"column"}
      rowGap="36px"
      borderRadius={"12px"}
      boxShadow={"2xl"}
      minHeight={"100vh"}
      maxH={"110vh"}
      
    >
      <Box position={"relative"}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          height={"100px"}
        >
          <path
            fill="#43A4F3"
            d="M41.2,-60C52.5,-48.4,60.3,-35.3,62.6,-21.8C64.9,-8.4,61.7,5.3,54.2,14.3C46.7,23.3,34.9,27.6,25.2,39.4C15.5,51.2,7.7,70.4,-5.4,77.8C-18.5,85.2,-36.9,80.7,-43,67.7C-49.1,54.8,-42.9,33.3,-36.7,19.7C-30.5,6,-24.4,0,-24.1,-9.9C-23.7,-19.9,-29.2,-33.8,-26.2,-48.1C-23.1,-62.4,-11.6,-77,1.7,-79.3C14.9,-81.6,29.8,-71.6,41.2,-60Z"
            transform="translate(100 100)"
          />
        </svg>
        <Text
          position={"absolute"}
          top="50%"
          transform={"translate(25%,-50%)"}
          fontSize="28px"
        >
          Tracker
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir="column"
        gap={"20px"}
        fontSize="20px"
        padding={"24px"}
        rowGap="36px"
        
        
      >
        <Link as={NavLink} to="/dashboard/home">
          {" "}
          Home
        </Link>
        <Link as={NavLink} to="/dashboard/activebugs">
          {" "}
          Active Bugs
        </Link>

        <Link as={NavLink} to="/dashboard/statistics">
          {" "}
          Statistics
        </Link>
        <Link as={NavLink} to="/dashboard/profile">
          {" "}
          Profile
        </Link>

        <Link as={NavLink} to="/dashboard/organization">
          {" "}
        Organization
        </Link>

        <Link as={NavLink} to="/dashboard/projects">
          {" "}
        Projects
        </Link>
        <Center margin={"auto 0 20px 0" } >
        <SignOut />
      </Center>

      </Box>
   
    </Box>
  );
}
