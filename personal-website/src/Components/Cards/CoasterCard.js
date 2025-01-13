import React from "react";
import "./CoasterCard.css";

const CoasterCard = ({ name, type, speed, height, length, image, rcdbLink }) => {
  return (
    <div className="coaster-card">
      <div className="coaster-details">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Speed: {speed} mph</p>
        <p>Height: {height} ft</p>
        <p>Length: {length} ft</p>
        <a href={rcdbLink} target="_blank" rel="noopener noreferrer">
          View on RCDB
        </a>
      </div>
    </div>
  );
};

export default CoasterCard;