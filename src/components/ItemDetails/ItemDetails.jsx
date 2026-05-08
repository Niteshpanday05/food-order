import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetails.css";
import FoodItem from "../FoodItem/FoodItem";


const ItemDetails = (foodData) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = foodData.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <div className="item-page">
        <h2>Item not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="item-page">
      <div className="item-card">
        
        {/* Image */}
        <div className="item-img">
          <img src={item.img} alt={item.name} />
        </div>

        {/* Details */}
        <div className="item-content">
          <h1>{item.name}</h1>
          <p className="price">${item.price}</p>
          <p className="category">{item.category}</p>
          <p className="desc">{item.description}</p>

          <div className="actions">
            <button className="btn primary">Add to Cart</button>
            <button className="btn secondary" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemDetails;