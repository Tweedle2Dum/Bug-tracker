import React from 'react'
import { Card,CardHeader,CardBody,CardFooter,Heading,Text, Button } from '@chakra-ui/react'

export default function ProjectCard({name,desc}) {
 
  return (
    <>

    <Card margin={"4px 4px 4px 4px"}>
      <CardBody>
    
        <div>
        <Heading size={"md"}>Name: {name}</Heading>
        
        <Text padding={"4px"}><Heading as={"span"} display={"inline-block "} size={"sm"} margin={"4px 0"}>Description: </Heading> 
<Text display={"inline"} padding={"0 4px"}>{desc}</Text></Text>
        </div>
        </CardBody>
        <CardFooter>
          <Button colorScheme={"blue"}>Does Something</Button>
        </CardFooter>
        </Card>
    </>
  )
}
