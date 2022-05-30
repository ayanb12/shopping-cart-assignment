import React from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "./../common/Environment";

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="category-card py-1 px-4 my-2">
        <img
          className="category-img"
          src={`${BACKEND_BASE_URL}${data.imageUrl}`}
          alt={data.name}
        />

        <div className="category-content">
          <h2 className="my-1">{data.name}</h2>
          <p className="my-1">{data.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Explore {data.name}
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
