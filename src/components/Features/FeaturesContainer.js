import React from "react";
import { features } from "../../LocalData/data";
import Feature from "./Feature";
const FeaturesContainer = () => {

  // this function renders features and filter them based on the side
  const renderFeatures = (features = [], arg) => {
    return features
      .map(({ header, text, icon }, index) => {
        return (
          // this is a generic component for every feature
          <Feature header={header} text={text} key={index} >
            {icon}
          </Feature>
        );
      })
      .filter((feature, index) => {
        if (arg === "left") {
          return index <= 2;
        } else {
          return index > 2;
        }
      });
  };
  return (
    <>
    
      <div className="left-features">{renderFeatures(features, "left")}</div>
      <div className="right-features">{renderFeatures(features)}</div>
    </>
  );
};

export default FeaturesContainer;
