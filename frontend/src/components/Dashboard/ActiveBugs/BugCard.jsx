import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BugCard({name,severity,proj,comments}) {
  return (
    <Box>{name}{severity}{proj}{comments}</Box>
  )
}
