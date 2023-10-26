import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import Axios from 'axios';
import './Footer.css'
import GoogleTranslate from './GoogleTranslate'

function Footer() {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    Axios.post("http://localhost:3001/subscription", {
      email:email,
    }).then((response)=> {
      console.log(response);
    });
  };

  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Subscribe to recieve information about sales
                on your email.
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name="email"
                    placeholder='Your Email'
                     className='footer-input' onChange={(e) => setEmail(e.target.value)}></input>
                    <Button buttonStyle='btn--outline' link={'/thanks'} onClick={subscribe}>Subscribe.</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>More information.</h2>
                    <Link to='/Location'>Location.</Link>
                    <Link to='/Tos'>Terms and services.</Link>
                    <Link to='/Cookies'>Cookies.</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Get help.</h2>
                    <Link to='/Support'>Customer Support.</Link>
                    <Link to='/Payment'>Payment option.</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact us.</h2>
                    <Link to='/Contact'>Contact.</Link>
                    <h4>(032) xxx-xx-xx.</h4>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media.</h2>
                    <a href='https://www.facebook.com/KutaisiInternationalUniversity'>Facebook.</a>
                    <a href='https://www.instagram.com/univkiu/?hl=en'>Instagram.</a>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Languages.</h2>
                    <GoogleTranslate />
                    {/* the page needs to reload for this to load */}
                </div>
            </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Norf <i class="fa-solid fa-arrows-to-eye"></i>
            </Link>
          </div>
          <small class='website-rights'>© 2022 Norf. All Rights Reserved.</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/KutaisiInternationalUniversity'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/univkiu/?hl=en'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer