import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../common/Environment";
import Carousel from "../component/Carousel";
import CategoryCard from "../component/CategoryCard";
import BannerService from "../service/Banner.service";
import CategoryService from "../service/Category.service";
import { CarouselPauseOnHoverSettings } from "../utils/CarouselSettings";

const Home = () => {
  const [category, setCategory] = useState(null);
  const [banners, setBanners] = useState(null);

  const fetchCategories = async () => {
    const { data } = await CategoryService.getAllCategories();
    setCategory(data);
  };

  const fetchBanners = async () => {
    const { data } = await BannerService.getAllBanners();
    setBanners(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchBanners();
  }, []);

  return (
    <>
      {banners && (
        <Carousel settings={CarouselPauseOnHoverSettings("carousel mb-2")}>
          {banners.map((item) => (
            <img
              src={`${BACKEND_BASE_URL}${item.bannerImageUrl}`}
              alt={`${item.bannerImageAlt}`}
              className="carousel-img"
              key={item.id}
            />
          ))}
        </Carousel>
      )}
      {category &&
        category.map((item, key) => <CategoryCard data={item} key={item.id} />)}
    </>
  );
};

export default Home;
