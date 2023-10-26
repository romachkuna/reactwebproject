import React from 'react';
import "./AddProductCard.css";



function ProductCard(props) {
  return (
        <div id="container">
          <div className="product-details">
            <h1>{props.name}</h1>
            <p>{props.description}</p>

            <div className="control">
              <button className="btn">
                <span className="price">{props.price} GEL</span>

                <span className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>

                <span className="buy">Buy Now</span>
              </button>
            </div>
          </div>

          <div className="product-image">
            <img src={props.imagelink} alt={"lorem Ipsum"} />

            <div className="info">
              <h2>Description</h2>
              <ul>
                <li>
                  <strong>Brand: </strong>
                  {props.brand}
                </li>
                <li>
                  <strong>Amount: </strong>
                  {props.amount}
                </li>
                <li>
                  <strong>Type: </strong>
                  {props.type}
                </li>
                <li>
                  <strong>Departament: </strong>
                  {props.departament}
                </li>
                <li>
                  <strong>Year: </strong>
                  {props.year}
                </li>
                <li>
                  <strong>Condition: </strong>
                  {props.prodcondition}
                </li>
              </ul>
            </div>
          </div>
        </div>
  );
}

export default ProductCard;
