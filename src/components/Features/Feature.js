import React from "react";
const Feature = ({ header, text, children }) => {
  return (
    <>
      <div className="feature">
        {children}
        <h3 className="heading-tertiary u-mb-sm u-mt-sm">{header}</h3>
        {text.includes("/") ? (
          <p className="feature-description">
            {text.split("/")[0]}
            <br />
            {text.split("/")[1]}
          </p>
        ) : (
          <p className="feature-description">{text}</p>
        )}
      </div>
    </>
  );
};

export default Feature;
