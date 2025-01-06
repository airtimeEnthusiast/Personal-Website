import React from "react";
import "./CoasterList.css";

const CoasterList = ({ coasters, sortOrder, setSortOrder }) => {
  return (

    <div className="coaster-list">
      <div className="sort-options">
        <label>Sort by:</label>
        {setSortOrder && sortOrder && ( // Ensure these are passed as props before using
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="rank">Rank</option>
            <option value="name">Name</option>
            <option value="height">Height</option>
            <option value="speed">Speed</option>
          </select>
        )}
      </div>
      <header className="coaster-header">
        <h1>Coaster List</h1>
      </header>
      <div className="coaster-items">
        {coasters.map((coaster, index) => (
          <div key={coaster.id} className="coaster-item">
            <div className="rank-bubble">{coaster.rank !== Infinity ? coaster.rank : "N/A"}</div>
            <div className="coaster-content">
              <h2>{coaster.Name}</h2>
              <p>Speed: {coaster.Speed || "N/A"} mph</p>
              <p>Height: {coaster.Height || "N/A"} ft</p>
              <p>
                Link: {coaster.Link ? (
                  <a href={coaster.Link} target="_blank" rel="noopener noreferrer">
                    More Info
                  </a>
                ) : "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoasterList;
