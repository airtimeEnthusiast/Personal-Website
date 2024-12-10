import React from "react";
import "./CoasterSlideshow.css";

const CoasterSlideshow = ({ images }) => {
  return (
    <div className="slideshow">
      {images.map((img, index) => (
        <div key={index} className="slide">
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default CoasterSlideshow;