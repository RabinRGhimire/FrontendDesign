import React from 'react'
import Nav from './layout/Nav'
import Carousel from '../Carousel'
import Itinerary from '../Itinerary'
import Readmore from './layout/Readmore'
import Footer from './layout/Footer'
const Home = () => {
  return (
    <>
      <Nav/>
      <Carousel/>
      <Itinerary/>
      <Readmore/>
      <Footer/>
    </>
  )
}

export default Home
