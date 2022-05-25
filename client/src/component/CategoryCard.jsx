import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="category-card py-1 px-4 mb-3">
        <img
          src={require("../assets/images/category/fruits.png")}
          alt="Category"
          className="category-img"
        />

        <div className="category-content">
          <h2 className="my-1">Fruits & Vegetables</h2>
          <p className="my-1">A variety of fresh fruits & vegetables</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Explore Fruits
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
