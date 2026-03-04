import React, { useState, useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./SearchIcon.css";

const SearchIcon = () => {
  const { food_list = [] } = useContext(StoreContext) || {};
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef();

  // 🔹 Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchTerm.trim()) {
        setResults([]);
        return;
      }

      const filtered = food_list.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filtered.slice(0, 6));
      setActiveIndex(-1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, food_list]);

  // 🔹 Click outside close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Highlight matching text
  const highlightText = (text) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  // 🔹 Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      navigate(`/food/${results[activeIndex]._id}`);
      setSearchTerm("");
      setResults([]);
    }
  };

  const handleSelect = (item) => {
    navigate(`/food/${item._id}`);
    setSearchTerm("");
    setResults([]);
  };

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img src={assets.search_icon} alt="Search" className="search-icon" />
      </div>

      {searchTerm && (
        <div className="search-dropdown">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={item._id}
                className={`search-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                <img src={item.image} alt={item.name} />
                <div className="search-info">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightText(item.name),
                    }}
                  />
                  <span>Rs. {item.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-result">No food found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchIcon;