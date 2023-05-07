import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getUserDetails } from "../firestore";
import { Spinner, Center } from "@chakra-ui/react";

export default function DashboardLayout() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

 
  useEffect(()=>{
    const data = getUserDetails()
    .then((data)=>{

      setUserDetails(data);
    })
    .catch((e)=>{
      console.warm("unable to fetch user data");

    })
  
  },[])

  if (currentUser) {
    if (userDetails !== null) {
      return (
        <div className="Root-layout">
          <>
          {console.log(userDetails)}
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
    
    else {
      return (
        <>
          <div className="Root-layout">
            <Center height={"100vh"}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          </div>
        </>
      );
    }
  } 
  
  else {
    return (
      <div className="Root-layout">
        <Navigate to={"/login"} />
      </div>
    );
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
