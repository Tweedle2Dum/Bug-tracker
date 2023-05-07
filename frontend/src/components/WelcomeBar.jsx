import React from 'react'
import { Box,Text,Heading,Avatar } from '@chakra-ui/react'

export default function WelcomeBar() {
  return (
    <Box display={"flex"} marginTop="10px">
        <Box marginLeft={"20px"}>
        <Heading>Welcome user!!</Heading>
        <Text>Some random text regarding the content</Text>
        </Box>
        <Avatar name="User User" src="" size={"xl"} marginLeft="auto" marginRight={"20px"} ></Avatar>
    </Box>
    )
}
