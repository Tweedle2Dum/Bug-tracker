import React from 'react'
import CreateProject from '../components/Dashboard/Projects/CreateProject'
import { Box } from '@chakra-ui/react'
import { useState, useEffect} from 'react';
import { getOrganizationDetails } from '../utils';
export default function Projects() {


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
          <Box marginLeft={"auto"}><CreateProject organizations={organizations}/></Box>
        
        </Box>
    </>
  )
}
