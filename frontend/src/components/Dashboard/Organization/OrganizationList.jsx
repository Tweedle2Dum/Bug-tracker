import React from 'react'

export default function OrganizationList({data}) {
  let i = 0 ; 
  const chemist = (data.Organizations).map(organization=>{
     return <li>{organization.Intro}</li>
  })
  
  
  return (
    <>
    <div>{console.log((data.Organizations))}</div>
    <ul>{chemist}</ul>
    
   </>
  )
}
