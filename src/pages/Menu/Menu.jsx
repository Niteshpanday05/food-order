import { useState, useMemo, useEffect } from "react";
import './Menu.css'

const MENU_DATA = [
  { id: 1, name: "Pizza", category: "Fast Food", price: 12 },
  { id: 2, name: "Burger", category: "Fast Food", price: 8 },
  { id: 3, name: "Pasta", category: "Italian", price: 10 },
  { id: 4, name: "Salad", category: "Healthy", price: 6 },
  { id: 5, name: "Sandwich", category: "Healthy", price: 7 },
];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔹 Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // 300ms delay

    return () => clearTimeout(handler);
  }, [search]);

  const categories = useMemo(() => {
    return ["All", ...new Set(MENU_DATA.map(item => item.category))];
  }, []);

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter(item => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [debouncedSearch, activeCategory]);

  return (
    <div className="menu">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🏷 Categories */}
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🍽 Menu Items */}
      <div className="menu-grid">
        {filteredMenu.length ? (
          filteredMenu.map(item => (
            <div key={item.id} className="menu-card">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <strong>${item.price}</strong>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
