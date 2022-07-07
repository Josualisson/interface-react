import React from 'react';
import '../style.css'
import { FaArrowRight } from 'react-icons/fa';

function Menu() {
    return (

      <div className="menu-container">
  
        <div className="menu-container_logo">
          <a href="">BrandName</a>
        </div>
  
        <div className="menu-container_options">
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </div>
  
        <div className="menu-container_login">
          <a href="">Login</a>
          <a href="" >
            Join US {"  "}
            <FaArrowRight/>
          </a>
        </div>
  
      </div>

    );
  }
  
  export default Menu;