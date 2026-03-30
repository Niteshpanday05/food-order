import React, { useState } from "react";
import "./Menu.css";

const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 10,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 8,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: 12,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Veg Pizza",
    category: "Pizza",
    price: 9,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },

  {
    id: 6,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: "https://via.placeholder.com/150",
  },
];

const categories = ["All", "Pizza", "Burger", "Pasta"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? foodData
      : foodData.filter((item) => item.category === activeCategory);

  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>

      {/* Category Filter */}
      <div className="menu-categories">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Food Items */}
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
