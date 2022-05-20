import React from "react";
import Carousel from "../component/Carousel";
import CategoryCard from "../component/CategoryCard";
import { CarouselPauseOnHoverSettings } from "../utils/CarouselSettings";

const Home = () => {
  return (
    <>
      <Carousel settings={CarouselPauseOnHoverSettings("carousel mb-2")}>
        {[1, 2, 3, 4, 5].map((item) => (
          <img
            src={require(`../assets/images/offers/offer${item}.jpg`)}
            alt={`${item}`}
            className="carousel-img"
            key={item}
          />
        ))}
      </Carousel>
      {[1, 2, 3, 4, 5].map((item, key) => (
        <CategoryCard key={item} />
      ))}
    </>
  );
};

export default Home;
