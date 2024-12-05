import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoasterCard from "./CoasterCard";
import "./ParkCoastersPage.css";
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

  return (
    <div className="park-coasters-page">
      <h1>{parkName} Roller Coasters</h1>
      <div className="coaster-list">
        {coasters.map((coaster, index) => (
          <CoasterCard
            key={index}
            name={coaster.Name}
            type={coaster.Material}
            image={coaster.image}
            rcdbLink={coaster.Link}
          />
        ))}
      </div>
    </div>
  );
};

export default ParkCoastersPage;
