import React, { useState, useEffect } from "react";
import CoasterCard from "./CoasterCard";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CoasterPage.css";

const CoasterPage = () => {
  const [coasters, setCoasters] = useState([]);

  // Fetch coasters from Firestore on component mount
  useEffect(() => {
    const fetchCoasters = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "coasters"));
        const coasterData = querySnapshot.docs.map((doc) => {
          console.log("Coaster data:", doc.data());
          return doc.data();
        });
        setCoasters(coasterData);
      } catch (error) {
        console.error("Error fetching coasters: ", error);
      }
    };

    fetchCoasters();
  }, []);

  // Statistics for display
  const totalCoasters = coasters.length;
  const woodenCoasters = coasters.filter((coaster) => coaster.Material === "Wood").length;
  const steelCoasters = coasters.filter((coaster) => coaster.Material === "Steel").length;

  return (
    <div className="coaster-page">
      <header className="coaster-header">
        <h1>My Coaster Collection</h1>
        <div className="coaster-stats">
          <div>Total Coasters: {totalCoasters}</div>
          <div>Wooden Coasters: {woodenCoasters}</div>
          <div>Steel Coasters: {steelCoasters}</div>
        </div>
      </header>

      <div className="coaster-list">
        {coasters.map((coaster, index) => (
          <CoasterCard
            key={index}
            name={coaster.Name}
            type={coaster.Material}
            image={coaster.image}
            rcdbLink={coaster.ID}
          />
        ))}
      </div>
    </div>
  );
};


export default CoasterPage;