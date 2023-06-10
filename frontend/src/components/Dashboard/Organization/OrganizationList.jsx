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
      {data && (data.Organizations).map(organization=>{
       return (<Box key={organization.Id}> <OrganizationCard key={organization.Id} name = {organization.Name} intro = {organization.Intro} /></Box>)
    })}
      </>
    )


  }
  
  
  }
  
 


