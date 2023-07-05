import React from 'react'
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
    

            {projectsArray && projectsArray.map((project,index)=>{

              return ( <ProjectCard key={index} name={project.name} desc={project.desc}></ProjectCard>)
            })}
       
      </>
      
    )


  }
  
  
  }
  
 


 