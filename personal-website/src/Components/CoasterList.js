import React from "react";
import "./CoasterList.css";

const CoasterList = ({ coasters }) => {
  return (
    <div className="coaster-list">
      {coasters.map((coaster, index) => (
        <div key={index} className="coaster-item">
          {index + 1}. {coaster}
        </div>
      ))}
    </div>
  );
};

export default CoasterList;