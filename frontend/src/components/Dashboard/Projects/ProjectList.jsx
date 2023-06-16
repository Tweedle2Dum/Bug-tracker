import React from 'react'
import { Box } from '@chakra-ui/react';
import { v4 as uuidV4 } from 'uuid';
import ProjectCard from './ProjectCard';
export default function ProjectList({projectsArray}) {
  
  if(projectsArray===undefined){
    return <></>
  }
  else
  {
    return (
      <>
        {console.log(projectsArray)}

        
        {projectsArray.map((projects)=>{
          {console.log(projects)}
        })}
      
      </>
    )


  }
  
  
  }
  
 


 