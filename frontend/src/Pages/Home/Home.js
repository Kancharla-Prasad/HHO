import React from 'react';
import HeroSection from './components/herosection';
import Testimonials from './components/testimonals';
import Timeline from './components/timeline';


function Home() {
  return (
    <div>
        <HeroSection />
        <Timeline />
        <Testimonials />
    </div>
  )
}

export default Home
