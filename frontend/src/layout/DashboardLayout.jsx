import React from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import {Grid} from "@chakra-ui/react"
import { useAuth } from '../context/AuthContext'

export default function RootLayout() {
  const {currentUser} = useAuth()
  
  return (
    <div className="Root-layout">
      {currentUser ? (<>
      <Grid gridTemplateColumns={"200px 1fr"} gridAutoRows={"90vh"} padding={"12px"} gap={"24px"} letterSpacing="1px">
      <Sidebar />

  
      <Outlet />
      </Grid>
      </>) : (<Navigate to={"/login"} />) }
      
    </div>
  )
}
