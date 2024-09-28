import React from 'react'
import Home from './components/home'
import Intro from './components/Intro'
import Collection from './components/Collection'
// import { motion, useScroll } from "framer-motion"

const App = () => {
  
  return (
    <div className='w-[100vw]  bg-[#EBEBEB]'>
      <Home  />
      <Intro />
      <Collection />
    </div>
  )
}

export default App