import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { foodData } from "../data/foodData";
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filteredFood, setFilteredFood] = useState(foodData);

  const categories = ["All", ...new Set(foodData.map(i => i.category))];

  // 🔹 Debounced Search + Category Filter
  useEffect(() => {
    const timer = setTimeout(() => {
      let data = foodData;

      if (category !== "All") {
        data = data.filter(item => item.category === category);
      }

      if (search) {
        data = data.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFilteredFood(data);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category]);

  return (
    <section className="menu">
      <h2>Explore Our Menu</h2>

      {/* 🔍 Search */}
      <input
        className="menu-search"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🏷 Categories */}
      <div className="menu-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🍔 Food Items */}
      <div className="menu-items">
        {filteredFood.length > 0 ? (
          filteredFood.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Rs. {item.price}</p>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-result">No food found 😕</p>
        )}
      </div>
    </section>
  );
};

export default Menu;
