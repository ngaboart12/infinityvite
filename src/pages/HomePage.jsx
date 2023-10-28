import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WebMobile from '../components/WebMobile'
import CaseStudies from '../components/CaseStudies'
import Aboutus from '../components/Aboutus'
import WhatSay from '../components/WhatSay'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function HomePage() {
  return (
  <>
  <Hero/>
  <Services/>
  <WebMobile/>
  <CaseStudies/>
  <Aboutus/>
  <WhatSay/>
  <ContactUs/>
  <Footer/>
  </>
  )
}

export default HomePage
