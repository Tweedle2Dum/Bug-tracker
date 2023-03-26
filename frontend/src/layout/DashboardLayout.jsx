import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="Root-layout">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam.</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor?</div>

        <Outlet />
    </div>
  )
}
