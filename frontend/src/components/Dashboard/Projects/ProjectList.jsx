import React from 'react'
import ProjectCard from './ProjectCard';
import { Box } from '@chakra-ui/react';

export default function ProjectList({projectsArray}) {
  
  if(projectsArray.length==0){
   return <></>
  }
  else
  {
      
    return (
      <>
    
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} marginTop={"20px 0 0 0 "}>
            {projectsArray && projectsArray.map((project,index)=>{

              return ( <ProjectCard key={index} name={project.name} desc={project.desc}></ProjectCard>)
            })}
            </Box>
       
      </>
      
    )


  }
  
  
  }
  
 


 