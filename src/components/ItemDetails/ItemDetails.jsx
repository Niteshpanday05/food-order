import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetails.css";
import { foodData } from "../data/foodData"; // adjust path if needed

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find item by ID
  const item = foodData.find((item) => item.id === parseInt(id));

  // If item not found
  if (!item) {
    return (
      <div className="item-details">
        <h2>Item not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="item-details">
      <div className="item-container">
        
        {/* Image Section */}
        <div className="item-image">
          <img src={item.img} alt={item.name} />
        </div>

        {/* Info Section */}
        <div className="item-info">
          <h2>{item.name}</h2>
          <p className="item-price">${item.price}</p>
          <p className="item-category">{item.category}</p>

          <p className="item-description">
            Delicious food made with fresh ingredients. Perfect for your cravings!
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="add-btn">Add to Cart</button>
            <button
              className="add-btn"
              style={{ background: "#333" }}
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemDetails;