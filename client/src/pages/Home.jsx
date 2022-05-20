import React from "react";
import Carousel from "../component/Carousel";
import CategoryCard from "../component/CategoryCard";

const Home = () => {
  return (
    <>
      <Carousel />
      {[1, 2, 3, 4, 5].map((item, key) => (
        <CategoryCard />
      ))}
    </>
  );
};

export default Home;
