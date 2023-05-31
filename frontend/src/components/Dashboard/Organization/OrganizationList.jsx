import React from 'react'
import OrganizationCard from './OrganizationCard';
export default function OrganizationList({data}) {
  
  
  
  return (
    <>
    


    {data && (data.Organizations).map(organization=>{
      let i = 0 ;
     return (<> <OrganizationCard key={organization.Id} name = {organization.Name} intro = {organization.Intro} /></>)
  })}
    
   </>
  )
}
