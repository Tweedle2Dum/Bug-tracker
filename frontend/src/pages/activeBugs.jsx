import React, { useEffect, useState } from "react";
import CreateBug from "../components/Dashboard/ActiveBugs/CreateBug";
import { Box } from "@chakra-ui/react";
import { getOrganizationDetails,getAllProjects } from "../utils";
export default function activeBugs() {


  const [projects,setProjects]=useState([])
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

  useEffect(()=>{
    async function getData (){
      const data = await getAllProjects();
      console.log(data)
      console.log(data.flat(Infinity))
      setProjects((prevState)=>[...prevState,...(data.flat(Infinity))])
    }
    getData()
  },[])
  return (
    <>
      <Box display={"flex"}>
        <Box marginLeft={'auto'}>
          <CreateBug organizations={organizations} projects={projects}/></Box>
        
      </Box>
    </>
  );
}
