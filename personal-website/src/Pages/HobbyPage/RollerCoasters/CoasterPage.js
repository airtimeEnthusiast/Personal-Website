import React, { useState, useEffect } from "react";
import CoasterCard from "../../../Components/Cards/CoasterCard";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CoasterPage.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../../Components/Cards/InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PieChart from "../../../Components/Charts/PieChart";
import InfoCard from "../../../Components/Cards/InfoCard";
import LineChart from "../../../Components/Charts/LineChart";
import BarChart from "../../../Components/Charts/BarChart";
import CoasterSlideshow from "../../../Components/CoasterSlideshow";
import CoasterList from "../../../Components/CoasterList/CoasterList"; // Scrollable coaster list component
import customRankings from "../../../Components/CoasterList/Rankings";

// Fix for default Leaflet icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Reset the map view
const ResetMapButton = ({ center, zoom }) => {
  const map = useMap();

  const resetMap = () => {
    map.setView(center, zoom);
  };

  return (
    <button
      onClick={resetMap}
      className="reset-map-button"
      aria-label="Reset Map"
    >
      <FontAwesomeIcon icon={faLocationCrosshairs} />
    </button>
  );
};

// Coaster home page content
const CoasterPage = () => {
  const navigate = useNavigate();
  const [coasters, setCoasters] = useState([]);
  const [parks, setParks] = useState([]);

   // Map display
  const mapCenter = [50, -96]; // Center on the US
  const mapZoom = 3.4;

  // Statistics for display
  const totalCoasters = coasters.length;
  const woodenCoasters = coasters.filter((coaster) => coaster.Material === "Wood").length;
  const steelCoasters = coasters.filter((coaster) => coaster.Material === "Steel").length;
  const [sortOrder, setSortOrder] = useState("rank"); // Default sort order



  // Fetch coasters from Firestore on component mount
  useEffect(() => {
    const fetchCoasters = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "coasters"));
        const coasterData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          
          // Find rank by matching name and park
          const rank = customRankings.findIndex(
            (ranking) => ranking.name === data.Name && ranking.park === data.Park
          ) + 1;
    
          return {
            id: doc.id,
            rank: rank > 0 ? rank : Infinity, // Assign rank or Infinity if not in customRankings
            ...data,
          };
        });
        setCoasters(coasterData);
      } catch (error) {
        console.error("Error fetching coasters:", error);
      }
    };

    // Fetch parks
    const fetchParks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "parks"));
        const parkData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          latitude: doc.data().Coordinates?.[0],
          longitude: doc.data().Coordinates?.[1],
        }));
        setParks(parkData);
      } catch (error) {
        console.error("Error fetching parks: ", error);
      }
    };

    fetchCoasters();
    fetchParks();
  }, []);

  // Sort coasters based on selected sort order
  const sortedCoasters = [...coasters].sort((a, b) => {
    if (sortOrder === "rank") return a.rank - b.rank; // Sort by rank ascending
    if (sortOrder === "name") return a.Name.localeCompare(b.Name); // Sort alphabetically by name
    if (sortOrder === "speed") return b.Speed - a.Speed; // Sort by speed descending
    if (sortOrder === "height") return b.Height - a.Height; // Sort by height descending
    if (sortOrder === "length") return b.Length - a.Length; // Sort by length descending
    return 0;
  });


  // Data for cards
  const fastestCoaster =
    coasters.length > 0
      ? coasters.reduce(
        (max, coaster) =>
          parseInt(coaster.Speed) > parseInt(max.Speed) ? coaster : max,
        { Speed: "0" }
      )
      : { Name: "N/A", Speed: "0" };

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

  // Data for Manufacturers
  const manufacturersData = coasters.reduce((acc, coaster) => {
    acc[coaster.Make] = (acc[coaster.Make] || 0) + 1;
    return acc;
  }, {});

  // Process data for top most ridden manufactured 
  const topN = 20;
  const sortedManufacturers = Object.entries(manufacturersData)
    .sort(([, countA], [, countB]) => countB - countA); // Sort by count descending
  const topManufacturers = sortedManufacturers.slice(0, topN);
  const otherManufacturers = sortedManufacturers.slice(topN);
  const manufacturerLabels = [
    ...topManufacturers.map(([name]) => name),
    "Other",
  ];
  const manufacturerValues = [
    ...topManufacturers.map(([, count]) => count),
    otherManufacturers.reduce((sum, [, count]) => sum + count, 0), // Sum of "Other"
  ];

  // Coaster page
  return (
    <div className="coaster-page">

      <header className="header">
        <div className="profile">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-pic"
          />
          <h1>My Coaster Collection</h1>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{totalCoasters}</span>
            <span className="stat-label">Total Coasters</span>
          </div>
          <div className="stat">
            <span className="stat-value">{woodenCoasters}</span>
            <span className="stat-label">Wooden Coasters</span>
          </div>
          <div className="stat">
            <span className="stat-value">{steelCoasters}</span>
            <span className="stat-label">Steel Coasters</span>
          </div>
        </div>
      </header>


      <div className="slideshow-section">
        <CoasterSlideshow
          images={[
            "image1.jpg", // Replace with actual images
            "image2.jpg",
            "image3.jpg",
          ]}
        />
      </div>

      <div className="info-cards-section">
        <InfoCard
          title="Fastest Coaster"
          description={fastestCoaster.Name}
          value={fastestCoaster.Speed}
          unit=" mph"
        />
      </div>

      <BarChart
        title="Manufacturers"
        dataLabels={manufacturerLabels}
        dataValues={manufacturerValues}
      />


      <div className="map-charts-container">

        <div className="map-container">
          <h3>Visited Parks</h3>
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ResetMapButton center={mapCenter} zoom={mapZoom} />
            {parks.map((park) => (
              <Marker
                key={park.id}
                position={[park.latitude || 0, park.longitude || 0]}
              >
                <Popup>
                  <b>{park.Name}</b>
                  <br />
                  City: {park.City}
                  <br />
                  State: {park.State}
                  <br />
                  Coasters: {park.Coaster_IDs?.length || 0}
                  <br />
                  <button
                    onClick={() =>
                      navigate(`/park/${park.id}`, {
                        state: { parkName: park.Name, coasterIds: park.Coaster_IDs },
                      })
                    }
                    className="view-coasters-button"
                  />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <PieChart
          title="Seating Types"
          dataLabels={seatingLabels}
          dataValues={seatingValues}
        />
      </div>

      <CoasterList
        coasters={sortedCoasters} // Pass sorted coasters
        sortOrder={sortOrder}     // Pass sortOrder
        setSortOrder={setSortOrder} // Pass setSortOrder
      />
    </div>

  );
};

export default CoasterPage;


