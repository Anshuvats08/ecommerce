import React from "react";
import Cardpro from "./Cardpro";
import "./pro.css";
function Product() {
  const caption = [
    {
      img: "pexels.jpg",          
      details: "Lily", 
      price: "$1.5"                                        
    },

    {
      img: "blaque.jpg",       
      details: "Dalia", 
      price:"$1"                         
    },

    {
      img: "photo.jpeg",                                                                        
      details: "Marigold",
      price:"$1"
    }

  ];
  const caption1 = [
    {
      img: "Rolex.jpg",          
      details: "Rolex",  
      price:"$4000"                                       
    },

    {
      img: "Bulgari.jpg",       
      details: "Bulgari",    
      price:"$3000"                      
    },

    {
      img: "watch.jpg",                                                                        
      details: "Rolex",
      price:"$3500"
    }

  ];

  return (
    <>
    <div id="mm">
      {caption.map((items, key) => (
        <Cardpro
          img={items.img}
          details={items.details}
          price={items.price}
          key={key}
        />
      ))}
    </div>
    <div id="mm">
    {caption1.map((items, key) => (
      <Cardpro
        img={items.img}
        details={items.details}
        price={items.price}
        key={key}
      />
    ))}
  </div>
  </>
  );
}

export default Product;
