import React from 'react'
import Header from './Header'
import HomePage from './HomePage'
import FeaturedProperty from './FeaturedProperty'
import Property from './Property'
import PopularRegion from './PopularRegion'
import AboutProperty from './AboutProperty'
import Footer from './Footer'
import Testimonial from './Testimonial'

const Landing = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
      <FeaturedProperty/>
      <Property/>
      <PopularRegion/>
      <AboutProperty/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Landing
