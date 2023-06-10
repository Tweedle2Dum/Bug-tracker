import React from "react";
import CreateBug from "../components/Dashboard/ActiveBugs/CreateBug";
import { Box } from "@chakra-ui/react";
export default function activeBugs() {
  return (
    <>
      <Box display={"flex"}>
        <Box marginLeft={'auto'}><CreateBug/></Box>
        
      </Box>
    </>
  );
}
