import React from 'react'
import { Card,CardBody,Heading,Text,CardFooter,Button } from '@chakra-ui/react'
export default function OrganizationCard({name,intro}) {
  return (
    <>
         <Card margin={"4px 4px 4px 4px"}>
      <CardBody>
    
        <div>
        <Heading size={"md"}>Name: {name}</Heading>
        
        <Text padding={"4px 0"}><Heading  as ={"p"}size={"sm"} margin={"4px 0"}>Description:</Heading> {intro}</Text>
        </div>
        </CardBody>
        <CardFooter>
          <Button colorScheme={"blue"}>Does Something</Button>
        </CardFooter>
        </Card>
    </>
  )
}
