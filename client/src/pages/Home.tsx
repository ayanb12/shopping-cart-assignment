import React from "react";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <CategoryCard />
      ))}
    </>
  );
};

export default Home;
