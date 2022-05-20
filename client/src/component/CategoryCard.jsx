import React from "react";

const CategoryCard = () => {
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
          <button className="btn btn-primary">Explore Fruits</button>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
