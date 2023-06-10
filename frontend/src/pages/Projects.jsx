import React from 'react'
import CreateProject from '../components/Dashboard/Projects/CreateProject'
import { Box } from '@chakra-ui/react'
export default function Projects() {
  return (
    <>
        <Box display={"flex"}>
          <Box marginLeft={"auto"}><CreateProject/></Box>
        
        </Box>
    </>
  )
}
