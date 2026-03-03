import React, { useState, useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./SearchIcon.css";

const SearchIcon = () => {
  const { food_list = [] } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const containerRef = useRef();

  // Filter results
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = food_list.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered.slice(0, 5)); // limit results
    setShowDropdown(true);
  }, [searchTerm, food_list]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search icon click
  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      alert(`Searching for "${searchTerm}"`); // replace with actual search action
    }
  };

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setShowDropdown(true);
          }}
        />
        <img
          src={assets.search_icon}
          alt="Search"
          className="search-icon"
          onClick={handleSearchClick}
        />
      </div>

      {showDropdown && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((item) => (
            <div
              key={item._id}
              className="search-item"
              onClick={() => alert(`You clicked on ${item.name}`)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchIcon;