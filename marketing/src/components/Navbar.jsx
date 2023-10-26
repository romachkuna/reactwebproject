import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './Navbar.css';
import { Button } from './Button';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './navbar-styles';

function Navbar({ totalItems }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else{
          setButton(true)
      }
  };

  useEffect(() => {
      showButton();
  }, []);
  
  window.addEventListener('resize',showButton);
  const classes = useStyles();
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                    Norf <i class="fa-solid fa-arrows-to-eye"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Products" className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Aboutpage" className='nav-links' onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sing-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' link={'/sign-up'}>SIGN UP</Button>}
            </div>
            <ul className="list-cart">
                <li className='nav-item'>
                    <Link to="/cart" className='nav-links-cart'>
                        <div className={classes.button}>
                            <IconButton aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar