import React from 'react'
import Navbar from '../../components/UI/Landing/Navbar/Navbar'
import Footer from '../../components/UI/Landing/Footer/Footer'

type Props = {children:React.ReactNode}

export default function LandingLayout({children}: Props) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}