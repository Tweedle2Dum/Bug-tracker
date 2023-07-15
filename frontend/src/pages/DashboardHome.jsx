import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import WelcomeBar from "../components/Dashboard/Home/WelcomeBar";
import { useOutletContext } from "react-router-dom";
import Graphactivebugs from "../components/Dashboard/Home/Graphactivebugs";
import PieChartOrg from "../components/Dashboard/Home/PieChartOrg";
import { fetchDataForOrganization, getOrganizationBugs } from "../utils";
import Loading from "../components/Loading";

export default function DashboardHome() {
  const { userDetails } = useOutletContext();

  const [data, setData] = useState([]);
  const [pie, setPie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataForOrganization();
        setData([...data]);
        setIsLoading(false);

        console.log(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrganizationBugs();
        setPie([...data]);
        setIsLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Loading />
      </Box>
    );
  }

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
        <Box gridArea={"g1"} borderRadius={"12px"}>
          <Graphactivebugs props={data} />
        </Box>
        <Box gridArea={"g2"}>
          <PieChartOrg props={pie} />
        </Box>
        <Box gridArea={"g4"} bgColor="white">
          grid 4
        </Box>
      </Grid>
    </Box>
  );
}
