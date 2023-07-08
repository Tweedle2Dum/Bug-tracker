import React from 'react'
import BugCard from './BugCard'
import { Box, Spinner } from '@chakra-ui/react'

export default function BugList({bugsArray}) {
   
    if(bugsArray.length==0){
/*         {console.log("here here")}
 */        
/* {console.log(bugsArray)}
 */        return <Box display={"flex"} justifyContent={"center"} alignItems={"center"}><Spinner/></Box>
      }
      else
      {
          
        return (
          <>
   {console.log(bugsArray)}
          { bugsArray.map((bug,index)=>{
/*             {console.log("runs")}
 */            
/* {console.log(bug.status)}
 */            return <BugCard key = {index} name = {bug.name} proj = {bug.projName} severity = {bug.severity} comments = {bug.comments} status={bug.status} orgId={bug.orgId} projId={bug.projId}></BugCard>
          })}
            
           
          </>
          
        )
    
    
      }
      
}
