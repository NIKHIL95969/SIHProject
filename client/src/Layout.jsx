import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/Header/ResponsiveAppBar'


function Layout() {

  return (
    <>
        <ResponsiveAppBar />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout