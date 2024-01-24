'use client'
import useGetBoards from 'components/Hooks/API/useGetBoards'
import { BoardNavbar } from 'components/UI/App/BoardNavbar/BoardNavbar'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {params:{workspaceId:string}}

export default function page({params}: Props) {
  const {data:session,status} = useSession()
  console.log(params.workspaceId)
  const {data,isSuccess} = useGetBoards(session as Session,params.workspaceId)
  if(isSuccess){
    console.log(data)
  }
  return (
    <div>
      <BoardNavbar items={data?.boards ?? []}/>
      
    
    </div>
  )
}