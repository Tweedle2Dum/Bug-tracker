'use client'
import { Flex } from '@mantine/core'
import useGetUser from 'components/Hooks/API/useGetUser'
import { Empty } from 'components/UI/App/Empty/Empty'
import { GradientCard } from 'components/UI/App/GradientCard/GradientCard'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  const {data:session,status} = useSession()
  const {data,isError,isLoading,isSuccess} = useGetUser(session as Session)

  return (
    <div>
     {/* <Empty/> */}
    <Flex wrap={'wrap'} gap={'20px'}>

      {data?.workspaces ? data.workspaces.map((items,index)=>{
        return <> <GradientCard key={index} {...items}/></>
      }) : <Empty/> }

 

    </Flex>
    </div>
  )
}