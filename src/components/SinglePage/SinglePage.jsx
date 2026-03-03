import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const SinglePage = () => {
  const { id } = useParams();
  const { food_list = [] } = useContext(StoreContext);

  const item = food_list.find((f) => f._id === id);

  if (!item) return <p>Item not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} width="300" />
      <p>{item.description}</p>
      <p>Price: Rs {item.price}</p>
    </div>
  );
};

export default SinglePage;