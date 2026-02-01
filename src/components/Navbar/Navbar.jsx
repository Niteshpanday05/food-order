import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {Link, NavLink} from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const menus = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "menu", path: "/menu" },
    { name: "services", path: "/services" },
  ];
  
  return (
    <div className="navbar">
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
      
      <ul className="navbar-menu">
        {menus.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </NavLink>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-serach-icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>signin</button>
      </div>
    </div>
  );
};

export default Navbar;
