import React from 'react'
import OrganizationCard from './OrganizationCard';
import { Box } from '@chakra-ui/react';
export default function OrganizationList({data}) {
  
  
  
  
    return (
      <>
      {data && (data.Organizations).map(organization=>{
       return (<Box key={organization.Id}> <OrganizationCard key={organization.Id} name = {organization.Name} intro = {organization.Intro} /></Box>)
    })}
      </>
    )

  }
  
 


