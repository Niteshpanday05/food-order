import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food. </h2>
        <p>
          “Life’s too short for boring meals. Get your favorite foods delivered
          hot, fresh, and fast with just a few clicks.”
        </p>
        

        <Button as={Link} to="/menu" variant="primary">
          Explore Menu
        </Button>
      </div>
    </div>
  );
};

export default Header;
