import React from 'react'
import Home from './components/home'
import Intro from './components/Intro'
// import { motion, useScroll } from "framer-motion"

const App = () => {
  
  return (
    <div className='w-[100vw]  bg-[#EBEBEB]'>
      <Home  />
      <Intro />
    </div>
  )
}

export default App