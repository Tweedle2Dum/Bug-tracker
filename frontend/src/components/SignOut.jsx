import React from "react";
import { auth } from "../firebase";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
export default function SignOut() {
  function signout() {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <Button colorScheme="blue" size={"lg"} onClick={signout} >
        Sign Out
      </Button>
    </>
  );
}
