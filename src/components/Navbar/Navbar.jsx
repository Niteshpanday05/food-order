import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const menus = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "menu", path: "/menu" },
    { name: "services", path: "/services" },
  ];
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      import {NavLink} from "react-router-dom";
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
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button>signin</button>
      </div>
    </div>
  );
};

export default Navbar;
