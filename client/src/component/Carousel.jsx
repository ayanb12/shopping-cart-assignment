import React, { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ settings, children }) => {
  return (
    <div>
      <h2>Pause On Hover</h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

Carousel.propTypes = {
  settings: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carousel;
