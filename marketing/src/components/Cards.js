import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>TOP CATEGORIES.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="images/electronics.png"
            text="ELECTRONICS."
            path="/products"
            />
            <CardItem 
            src="images/books.jpg"
            text="BOOKS."
            path="/products"
            />
          </ul>
          <ul className='cards__items'>
          <CardItem 
            src="images/health.png"
            text="HEALTH CARE PRODUCTS."
            path="/products"
            />
            <CardItem 
            src="images/kitchen.jpg"
            text="KITCHENWARE."
            path="/products"
            />
            <CardItem 
            src="images/sports.jpg"
            text="SPORTS PRODUCTS."
            path="/products"
            />
          </ul>
        </div>
      </div>
      <h1>TOP SELLERS.</h1>
    </div>
  );
}

export default Cards;