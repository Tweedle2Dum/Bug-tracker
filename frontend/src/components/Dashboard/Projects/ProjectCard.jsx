import React from 'react'
import { Card,CardHeader,CardBody,CardFooter,Heading,Text, Button } from '@chakra-ui/react'

export default function ProjectCard({key,name,desc}) {
 
  return (
    <>

    <Card margin={"4px 4px 4px 4px"}>
      <CardBody>
    
        <div key={key}>
        <Heading size={"md"}>Name: {name}</Heading>
        
        <Text padding={"4px 0"}><Heading size={"sm"} margin={"4px 0"}>Description:</Heading> {desc}</Text>
        </div>
        </CardBody>
        <CardFooter>
          <Button colorScheme={"blue"}>Does Something</Button>
        </CardFooter>
        </Card>
    </>
  )
}
