import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
     const activeStyle = {
          fontWeight: "bold",
          color: "#FEC12F",
          textDecoration : "underline",
          padding: "5px",
          
          }
     return (
          <div className="nav">
             <NavLink
               to="/home"
               activeStyle={activeStyle}
              >
            HOME
            </NavLink> 
            <NavLink
               to="/friends"
               activeStyle={activeStyle}
              >
            FRIENDS
            </NavLink> 
             <NavLink
               to="/about"
               activeStyle={activeStyle}
              >
            ABOUT
            </NavLink>  
           
             <NavLink
               to="/services"
               activeStyle={activeStyle}
              >
            SERVICES
            </NavLink>  
             
          </div>
     );
};

export default Nav;