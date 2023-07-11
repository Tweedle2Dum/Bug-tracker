import React from 'react'
import OrganizationCard from './OrganizationCard';
import { Box } from '@chakra-ui/react';
export default function OrganizationList({data}) {
  
  
  if(data===undefined){
    console.log("h1")
    return <></>
  }

  else
  {
    return (
      <>
      {console.log(data)}
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} margin={"20px 0 0 0"}>
      {data && data.map(organization=>{
       return (<OrganizationCard key={organization.Id} name = {organization.Name} intro = {organization.Intro} />)
    })}
    </Box>
      </>
    )


  }
  
  
  }
  
 


