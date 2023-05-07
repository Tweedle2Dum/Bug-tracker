import React from "react";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getUserDetails } from "../firestore";
import { Spinner } from "@chakra-ui/react";

export default function DashboardLayout() {
  const { currentUser, userDetails, setUserDetails } = useAuth();

  useEffect(() => {
    (async () => {
      const userData =  await getUserDetails();
      console.log(userData);
      setUserDetails(userData);
      console.log(userDetails);
    })();
  }, []);

  if (currentUser) {
    if (userDetails) {
      return (
        <div className="Root-layout">
          <>
            <Grid
              gridTemplateColumns={"200px 1fr"}
              gridAutoRows={"90vh"}
              padding={"12px"}
              gap={"24px"}
              letterSpacing="1px"
            >
              <Sidebar />

              <Outlet />
            </Grid>
          </>
        </div>
      );
    }
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  } else {
    return <Navigate to={"/login"} />;
  }

  /* return (
    <div className="Root-layout">
      {currentUser ? (<>
      <Grid gridTemplateColumns={"200px 1fr"} gridAutoRows={"90vh"} padding={"12px"} gap={"24px"} letterSpacing="1px">
      <Sidebar />

  
      <Outlet />
      </Grid>
      </>) : (<Navigate to={"/login"} />) }
      
    </div>
  ) */
}
