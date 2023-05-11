import React from 'react'
import { Box,Text,Heading,Avatar } from '@chakra-ui/react'

export default function WelcomeBar({user}) {
  return (
    <Box display={"flex"} marginTop="10px">
        <Box marginLeft={"20px"}>
        <Heading>Welcome {user}!!</Heading>
        <Text>Some random text regarding the content</Text>
        </Box>
        <Avatar name={user} src="" size={"xl"} marginLeft="auto" marginRight={"20px"} ></Avatar>
    </Box>
    )
}
