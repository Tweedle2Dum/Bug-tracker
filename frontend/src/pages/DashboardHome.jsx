import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import WelcomeBar from "../components/WelcomeBar";
import { useOutletContext } from "react-router-dom";
import Graphactivebugs from "../components/Graphactivebugs";

export default function DashboardHome() {
  const { userDetails } = useOutletContext();
  console.log(userDetails);
  return (
    <Box>
      <Grid
        gridGap={"20px"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        gridTemplateRows={"8em 20vh 20vh 15em"}
        gridTemplateAreas={" 'h h h' 'g1 g1 g2' 'g1 g1 g3' 'g4 g5 .' "}
      >
        <Box gridArea={"h"}>
          <WelcomeBar user={userDetails.User} />
        </Box>
        <Box gridArea={"g1"}>
          <Graphactivebugs  bgColor="orange">
            {" "}
          </Graphactivebugs>
        </Box>
        <Box gridArea={"g2"} bgColor="purple">
          graph 2
        </Box>
        <Box gridArea={"g3"} bgColor="pink">
          graph 3
        </Box>
        <Box gridArea={"g4"} bgColor="white">
          graph 3
        </Box>
        <Box gridArea={"g5"} bgColor="green">
          graph 3
        </Box>
      </Grid>
    </Box>
  );
}
