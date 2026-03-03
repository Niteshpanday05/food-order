import React, { useState, useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./SearchIcon.css";

const SearchIcon = () => {
  const context = useContext(StoreContext);

  if (!context) return null; // prevent crash

  const { food_list = [] } = context;
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const filtered = food_list.filter((item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered.slice(0, 5));
  }, [searchTerm, food_list]);

  // click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={assets.search_icon} alt="Search" className="search-icon" />
      </div>

      {results.length > 0 && (
        <div className="search-dropdown">
          {results.map((item) => (
            <div key={item._id} className="search-item">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchIcon;