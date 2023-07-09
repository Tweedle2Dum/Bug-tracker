import { Text,Heading } from '@chakra-ui/react'
import React from 'react'

export default function BugTip({message}) {
  return (
    <>
         <Heading size={"md"}>{message}</Heading>
    
    </>
  )
}
