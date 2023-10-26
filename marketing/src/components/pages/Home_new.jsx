import React from 'react'
import '../../App.css';
import Navbar from '../newNavbar/Navbar'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Slider from '../Slider';
import Products from '../Products';
import Footer from '../Footer';


const Home_new = () => {
  return (
      <div>
        <Navbar />
        <HeroSection />
        <Slider />
        <Cards />
        <Products />
        <Footer />
      </div>
  )
}

export default Home_new