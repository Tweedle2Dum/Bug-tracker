import React, { useEffect, useState } from "react";
import CreateBug from "../components/Dashboard/ActiveBugs/CreateBug";
import { Box } from "@chakra-ui/react";
import { getOrganizationDetails } from "../utils";
export default function activeBugs() {



  const [organizations,setOrganization] = useState([]);
  //useEffect for pulling data of all orgs the user is part of 
  useEffect(()=>{
    const data = getOrganizationDetails()
      .then((data) => {
        console.log(data)
        setOrganization(prevState => [...prevState,...data.Organizations]);
      })
      .catch((e) => {
        console.warn(e);
      });

  },[])
  return (
    <>
      <Box display={"flex"}>
        <Box marginLeft={'auto'}>
          <CreateBug organizations={organizations}/></Box>
        
      </Box>
    </>
  );
}
