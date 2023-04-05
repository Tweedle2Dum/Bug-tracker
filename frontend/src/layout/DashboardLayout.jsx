import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import {Grid} from "@chakra-ui/react"
export default function RootLayout() {
  return (
    <div className="Root-layout">
      <Grid gridTemplateColumns={"200px 1fr"} gridAutoRows={"90vh"} padding={"12px"} gap={"24px"} letterSpacing="1px">
      <Sidebar />


      <Outlet />
      </Grid>
        
    </div>
  )
}
