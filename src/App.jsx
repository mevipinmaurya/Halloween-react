import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CommonCard from './components/CommonCard'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CommonCard />
      <Banner />
      <CommonCard />
    </>
  )
}

export default App