import React from "react";
import { useSelector } from "react-redux";
import "./features.scss";
import FeaturesContainer from "./FeaturesContainer";
import ImagesSlider from "./ImagesSlider/ImagesSlider";
const Features = () => {
  const { section_features } = useSelector((state) => state.makadi.content);
  return (
    <div className="container">
      <section className="features-section">
        <div className="features-section__left-side">
          <div className="features-section__text-box">
            <h2 className="heading-secondary u-mb-md">
              <span className="heading-secondary--main">
                {section_features?.header?.split(",")[0]}
              </span>
              <span className="heading-secondary--sub">
                {section_features?.header?.split(",")[1]}
              </span>
            </h2>
            <p className="features-description u-mb-md">
              {section_features?.text}
            </p>
          </div>
          <div className="features-section__features">
            <FeaturesContainer />
          </div>
        </div>
        <div className="features-section__slider-box"> <ImagesSlider /> </div>
      </section>
    </div>
  );
};

export default Features;
