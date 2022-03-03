
// there are many packages to handle image slides like react-slider or react-stick
// but i decided to handle it manually with pure css, html, javascript to show my skills

import React, { useEffect, useState } from "react";

// images are in that file as i store there all my local data
import { slides } from "../../../LocalData/data";
import "./imagesSlider.scss";
const ImagesSlider = () => {

  // this state is handling the current shown slide and pressed button
  const [currentSlide, setCurrentSlide] = useState(0);

// this function handles button click to set the state to display the corresponding slide 
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

 // this function handles render slide content to avoid duplication of code and to be easy for any edit
  const renderSlides = (slides = []) => {
    return slides.map(({ image_1x, image_2x, alt, style }, index) => {
      return (
        <div
          className={`img-slider__slide ${
            index === currentSlide ? "img-slider__slide--active" : ""
          } `}
          key={index}
        >
          <img
            srcSet={`${image_1x} 1x ,${image_2x} 2x`}
            // alternative text must be descriptive to the image content to enhance SEO
            alt={alt}
            className={`img-slider__img ${style}`}
            // I define src to be displayed if there is anything wrong with srcSet
            src={image_2x}
          />
        </div>
      );
    });
  };

  // this function renders the buttons depends on number of slides (slides.length) to avoid duplication of code and to be easy for any edit
  const renderButtons = (buttonsNumber = 0) => {
    return [...Array(buttonsNumber)].map((el, index) => (
      <div
        className={`radio-btn ${
          index === currentSlide ? "radio-btn--active" : ""
        }`}
        key={index}
        onClick={() => handleButtonClick(index)}
      ></div>
    ));
  };
  return (
    <div className="img-slider">
      {renderSlides(slides)}
      <div className="img-slider__navigation">{renderButtons(slides.length)}</div>
    </div>
  );
};

export default ImagesSlider;
