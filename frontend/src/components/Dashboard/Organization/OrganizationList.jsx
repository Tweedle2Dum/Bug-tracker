import React from 'react'
import OrganizationCard from './OrganizationCard';
import { Box } from '@chakra-ui/react';
export default function OrganizationList({data}) {
  
  
  if(data===undefined){
    return <></>
  }
  if(data.Organizations===undefined){
    return <></>
  }
  else
  {
    return (
      <>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} margin={"20px 0 0 0"}>
      {data && (data.Organizations).map(organization=>{
       return (<OrganizationCard key={organization.Id} name = {organization.Name} intro = {organization.Intro} />)
    })}
    </Box>
      </>
    )


  }
  
  
  }
  
 


