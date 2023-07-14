import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import WelcomeBar from "../components/Dashboard/Home/WelcomeBar";
import { useOutletContext } from "react-router-dom";
import Graphactivebugs from "../components/Dashboard/Home/Graphactivebugs";
import PieChartOrg from "../components/Dashboard/Home/PieChartOrg";
import TimeSpanGraph from "../components/Dashboard/Home/TimeSpanGraph";

export default function DashboardHome() {
  const { userDetails } = useOutletContext();
  console.log(userDetails);
  return (
    <Box>
      <Grid
        gridGap={"20px"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        gridTemplateRows={"8em 20vh 20vh 15em"}
        gridTemplateAreas={" 'h h h' 'g1 g1 g2' 'g1 g1 g2' 'g4 g4 g4' "}
      >
        <Box gridArea={"h"}>
          <WelcomeBar user={userDetails.User} />
        </Box>
        <Box gridArea={"g1"}  borderRadius={"12px"}>
          <Graphactivebugs  bgColor="orange">
            {" "}
          </Graphactivebugs>
        </Box>
        <Box gridArea={"g2"}>
          <PieChartOrg></PieChartOrg>
        </Box>
   
        <Box gridArea={"g4"} bgColor="white">
          <TimeSpanGraph/>
        </Box>
       
      </Grid>
    </Box>
  );
}
