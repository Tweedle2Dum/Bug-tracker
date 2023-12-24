
import { Flex } from '@mantine/core'
import { Empty } from 'components/UI/App/Empty/Empty'
import { GradientCard } from 'components/UI/App/GradientCard/GradientCard'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
     {/* <Empty/> */}
    <Flex wrap={'wrap'} gap={'20px'}>
      <GradientCard/>
      <GradientCard/>

      <GradientCard/>

      <GradientCard/>

    </Flex>
    </div>
  )
}