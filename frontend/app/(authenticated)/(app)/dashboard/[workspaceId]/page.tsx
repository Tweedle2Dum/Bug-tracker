import { BoardNavbar } from 'components/UI/App/BoardNavbar/BoardNavbar'
import DragNDropContainer from 'components/UI/App/DragNDropContainer/DragNDropContainer'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <BoardNavbar/>
      <DragNDropContainer/>
    
    </div>
  )
}