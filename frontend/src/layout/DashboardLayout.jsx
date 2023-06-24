import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getUserDetails } from "../utils";
import { Spinner, Center } from "@chakra-ui/react";
import InfoModal from "../components/Dashboard/Home/InfoModal";
import Loading from "../components/Loading";

export default function DashboardLayout() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

 
  useEffect(()=>{
    const data = getUserDetails()
    .then((data)=>{

      setUserDetails(data);
    })
    .catch((e)=>{
      console.warn("unable to fetch user data");

    })
  
  },[])

  if (currentUser) {
    if (userDetails !== null) {
      return (
        <div className="Root-layout">
          <>

          <InfoModal userDetails = {userDetails} />
            <Grid
              gridTemplateColumns={"200px 1fr"}
              padding={"12px"}
              gap={"24px"}
              letterSpacing="1px"
            >
              <Sidebar />

              <Outlet context={{userDetails}} />
            </Grid>
          </>
        </div>
      );
    }
    
    else {
      return (
        <>
          <div className="Root-layout">
            <Loading />
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
