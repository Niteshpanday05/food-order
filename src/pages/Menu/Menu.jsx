import React, { useState } from "react";
import "./Menu.css";
import Pizza from "../../assets/pizza.jpg";
import About from "../../assets/about.jpg";

const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 10,
     img: About,
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 8,
    img: About,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: 12,
    img: About,
  },
  {
    id: 4,
    name: "Veg Pizza",
    category: "Pizza",
    price: 9,
    img: About,
  },
  {
    id: 5,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
      img: About,
  },

  {
    id: 6,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
     img: About,
  },
  {
    id: 7,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
     img: About,
  },
  {
    id: 8,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: About,
  },
  {
    id: 9,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: About,
  },
  {
    id: 10,
    name: "Chicken Burger",
    category: "Burger",
    price: 11,
    img: About,
  },
];

const categories = ["All", "Pizza", "Burger", "Pasta", "chowmein", "Biryani"];

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
