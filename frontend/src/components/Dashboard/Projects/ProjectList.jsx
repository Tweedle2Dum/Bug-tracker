import React from 'react'
import { Box } from '@chakra-ui/react';
import { v4 as uuidV4 } from 'uuid';
import ProjectCard from './ProjectCard';
export default function ProjectList({projectsArray}) {
  
  if(projectsArray.length==0){
    {console.log("here here")}
    return <>No projects</>
  }
  else
  {
      
    return (
      <>
      {projectsArray.map((projects)=>{
        return (projects.map((projects,index)=>{
          return (<ProjectCard key={index} name={projects.name} desc={projects.desc}></ProjectCard>)
        }))
      })}
        
       
      </>
      
    )


  }
  
  
  }
  
 


 