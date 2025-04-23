import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs';

const App = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<Layout />}  >

          <Route index element={<Home />} />

          <Route path='/about-us' element={<About />} />

          <Route path='/blogs' element={<Blogs />} />

        </Route>

      </Routes>

    </>
  )
}

export default App