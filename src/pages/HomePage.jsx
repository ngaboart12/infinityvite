import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WebMobile from '../components/WebMobile';
import CaseStudies from '../components/CaseStudies';
import Aboutus from '../components/Aboutus';
import WhatSay from '../components/WhatSay';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';

function HomePage() {
  document.title = ' Infinity Tech - Home page';
  return (
    <div>
      <Hero />
      <Services />
      <WebMobile />
      <CaseStudies />
      <Aboutus />
      <WhatSay />
      <ContactUs />
      <div className="flex items-center justify-center">
        <Footer2 />
      </div>
    </div>
  );
}

export default HomePage;
