import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const { food_list = [], addToCart } = useContext(StoreContext);

  // Find selected product
  const product = food_list.find((item) => item._id === id);

  if (!product) return <h2>Product not found</h2>;

  // 🔥 Recommendation logic (same category but not same product)
  const recommendations = food_list.filter(
    (item) =>
      item.category === product.category && item._id !== product._id
  );

  return (
    <div className="food-details">

      {/* Product Section */}
      <div className="food-main">
        <img src={product.image} alt={product.name} />

        <div className="food-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Rs. {product.price}</h3>

          <button onClick={() => addToCart(product._id)}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Recommendation Section */}
      {recommendations.length > 0 && (
        <div className="recommendation">
          <h3>Recommended for You</h3>

          <div className="recommend-grid">
            {recommendations.slice(0, 20).map((item) => (
              <div
                key={item._id}
                className="recommend-card"
                onClick={() => window.location.href = `/food/${item._id}`}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <span>Rs. {item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;