import {
  Avatar,
  Heading,
  Text,
  Box
} from "@chakra-ui/react";
import React from "react";

export default function ProfileCard({ userDetails }) {
  return (
    <>
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={"2em"}>
      <Avatar name={userDetails.User} size={"xl"} />
      <Heading>{userDetails.User}</Heading>

      <Text>Email: {userDetails.Email}</Text>
      <Text>Role: {userDetails.role}</Text>

      <Text>About me: {userDetails.intro}</Text>
      </Box>
    </>
  );
}
