import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './layout.css'

const Layout = () => {
    return (
        <>
            <Header />
            <div  >
                <Outlet />
            </div>
            <Footer />
        </>

    )
}

export default Layout