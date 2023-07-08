import React from 'react'
import CreateProject from '../components/Dashboard/Projects/CreateProject'
import { Box } from '@chakra-ui/react'
import { useState, useEffect} from 'react';
import { getOrganizationDetails,getAllProjects } from '../utils';
import ProjectList from '../components/Dashboard/Projects/ProjectList';
import Loading from '../components/Loading';

export default function Projects() {


  const [isLoading,setisLoading] = useState(true)
  const [organizations,setOrganization] = useState([]);
  //useEffect for pulling data of all orgs the user is part of 
  useEffect(()=>{
    const data = getOrganizationDetails()
      .then((data) => {
        setOrganization(prevState => [...prevState,...data.Organizations]);
       
      })
      .catch((e) => {
        console.warn(e);
      });

  },[])

  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    /* const data = getAllProjects()
    .then((data)=>{
      console.log(data)
      
      setProjects([...data])
      setisLoading(false)
    })
    .catch((e)=>{
      setisLoading(false)
      console.log("some error occured")

      
    }) */
    async function test(){
      try {
      const data = await getAllProjects()
/*       console.log(data);
 */      const result = [...data]
      setProjects(prevState => [...prevState,...result])
      setisLoading(false);
      }
      catch(e){
        console.log(e)
      }
    

    }
    test()
  },[])


 



 


 if(isLoading){
  return  <><Loading/></>
 }

 else
 {
  return (
    <>
        <Box >
          <Box display={"flex"}>
          <Box marginLeft={"auto"}><CreateProject organizations={organizations}/></Box>
          </Box>
          <ProjectList projectsArray={projects} />
        </Box>

    </>
  )

 }

  
}
