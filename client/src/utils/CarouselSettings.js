export const CarouselPauseOnHoverSettings = (className) => {
  const obj = {
    className,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return obj;
};
