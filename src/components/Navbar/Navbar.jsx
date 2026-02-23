import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {Link, NavLink} from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const menus = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "menu", path: "/menu" },
    { name: "services", path: "/services" },
  ];

  const{getTotalCartAmount} = useContext(StoreContext);
  
  return (
    <div className="navbar">
     <Link to='/' className="logo"> Food <span>Express</span></Link> 
      
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
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className="abc">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
