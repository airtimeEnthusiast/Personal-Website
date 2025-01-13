import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoasterCard from "../Components/Cards/CoasterCard";
import "./ParkCoastersPage.css";
import "./Charts/PieChart.css"; // Import CSS for PieChart if needed
import PieChart from "./Charts/PieChart"; // Correctly import the component
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ParkCoastersPage = () => {
  const location = useLocation();
  const { parkName, coasterIds } = location.state || {};
  const [coasters, setCoasters] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(coasterIds)

  useEffect(() => {
    const fetchCoasters = async () => {
      if (!coasterIds || coasterIds.length === 0) {
        setCoasters([]);
        setLoading(false);
        return;
      }

      try {
        // Firestore query to fetch coaster data by IDs
        const coasterCollection = collection(db, "coasters");
        const coasterQuery = query(coasterCollection, where("ID", "in", coasterIds));
        const querySnapshot = await getDocs(coasterQuery);

        const fetchedCoasters = querySnapshot.docs.map((doc) => doc.data());
        setCoasters(fetchedCoasters);
      } catch (error) {
        console.error("Error fetching coasters:", error);
        setCoasters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCoasters();
  }, [coasterIds]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (coasters.length === 0) {
    return <div>No coasters found for this park.</div>;
  }

  // Data for cards
  const fastestCoaster =
    coasters.length > 0
      ? coasters.reduce(
        (max, coaster) =>
          parseInt(coaster.Speed) > parseInt(max.Speed) ? coaster : max,
        { Speed: "0" }
      )
      : { Name: "N/A", Speed: "0" };


  // Data for Manufacturers
  const manufacturerData =
    coasters.length > 0
      ? coasters.reduce((acc, coaster) => {
        acc[coaster.Make] = (acc[coaster.Make] || 0) + 1;
        return acc;
      }, {})
      : {};

  const manufacturerLabels = Object.keys(manufacturerData);
  const manufacturerValues = Object.values(manufacturerData);

  // Data for Seating Types
  const seatingData =
    coasters.length > 0
      ? coasters.reduce((acc, coaster) => {
        acc[coaster.Seating] = (acc[coaster.Seating] || 0) + 1;
        return acc;
      }, {})
      : {};

  const seatingLabels = Object.keys(seatingData);
  const seatingValues = Object.values(seatingData);

  return (
    <div className="park-coasters-page">
      <h1>{parkName} Roller Coasters</h1>
            {/* Chart Section*/}
            <div className="chart-section">
        <h2>Statistics</h2>
        <div className="chart-container">
          <PieChart
            title="Seating Types"
            dataLabels={seatingLabels}
            dataValues={seatingValues}
          />
        </div>
        {<div className="chart-container">
          <PieChart
            title="Manufacturers"
            dataLabels={manufacturerLabels}
            dataValues={manufacturerValues}
          />
        </div>}
      </div>
      <header className="coaster-header">
      <h1>Coaster List</h1>
      </header>
      <div className="coaster-list">
        {coasters.map((coaster, index) => (
          <CoasterCard
            key={index}
            name={coaster.Name}
            type={coaster.Material}
            speed={coaster.Speed}
            height={coaster.Height}
            length={coaster.Length}
            image={coaster.image}
            rcdbLink={coaster.Link}
          />
        ))}
      </div>
    </div>
  );
};

export default ParkCoastersPage;
