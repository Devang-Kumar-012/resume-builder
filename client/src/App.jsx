import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='app' element={<Layout />} />
        <Route index element={<Dashboard />} />
        <Route path='builder/:resumeId' element={<Dashboard />} />



      </Routes>
    </>
  )

}

export default App