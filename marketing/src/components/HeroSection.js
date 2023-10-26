import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ad.mp4' autoPlay loop muted />
      <h1>BUY PRODUCTS.</h1>
      <p>FOR A CHEAP PRICE.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link={'/products'}
        >
          START ORDERING. <i class="fa-solid fa-cart-shopping"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          link={'/Login'}
        >
          SIGN IN. <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;