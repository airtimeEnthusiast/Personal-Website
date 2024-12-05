import React from "react";
import "./CoasterCard.css";

const CoasterCard = ({ name, type, image, rcdbLink }) => {
  return (
    <div className="coaster-card">
      <img src={image} alt={`${name} coaster`} className="coaster-image" />
      <div className="coaster-details">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <a href={rcdbLink} target="_blank" rel="noopener noreferrer">
          View on RCDB
        </a>
      </div>
    </div>
  );
};

export default CoasterCard;