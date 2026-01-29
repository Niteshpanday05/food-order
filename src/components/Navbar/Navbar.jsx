import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const menus = ["Home","Menu","Services", "About", "Contact"];
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        {menus.map((item) => (
          <Link
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => setMenu(item)}
          >
             {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
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
