
import React, { useState, useEffect } from 'react';
import '../app.css';

export const Bestsellers: React.FC = (props) => {

  const [items, setItems] = useState([
      {
        image: shoe1,
        name: "Nike Air Max 270",
        brand: "Nike",
        price: 195.80
      },
      {
        image: shoe2,
        name: "Nike Air Max 90",
        brand: "Nike",
        price: 195.80
      },
      {
        image: shoe3,
        name: "Nike Air Max Plus",
        brand: "Nike",
        price: 195.80
      }, 
    ])
   const [numreviews, setNumreviews] = useState(180);

  return (    
    <div className="best-card">
      <div className="title">Bestsellers</div>
      <ul>
        {items && items.map((item, i) => {
          return(
            <div key={i} className="best-item">
              <table>
                <tc>
                  <img alt="item-image" className="item-image" src={item.image} />
                </tc>
                <tc className="column2">
                  <tr>
                    <div className="name">{item.name}</div>
                  </tr>
                  <tr>
                    <div className="brand">{item.brand}</div>
                  </tr>
                  <tr>
                    <div className="price">${item.price}</div>
                  </tr>                                    
                </tc>
              </table>              
            </div>
          )
        })}
      </ul>
      <div className="free-shipping-tab">
        <div id="free-shipping" className="tab-text">Free Shipping</div>
        <button aria-labelledby="free-shipping" className="tab-button"></button>
      </div>
      <div className="reviews-tab">
        <div id="reviews" className="tab-text">Reviews ({props.numreviews})</div>
        <button aria-labelledby="reviews" className="tab-button"></button>
      </div>
    </div>
  );
};