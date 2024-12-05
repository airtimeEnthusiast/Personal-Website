import React, { useState, useEffect } from "react";
import CoasterCard from "../../../Components/Cards/CoasterCard";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CoasterPage.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PieChart from "../../../Components/Charts/PieChart";
import InfoCard from "../../../Components/Cards/InfoCard";
import LineChart from "../../../Components/Charts/LineChart";


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
  const mapCenter = [37.8, -96]; // Center on the US
  const mapZoom = 4; // Default zoom level

  // Fetch coasters from Firestore on component mount
  useEffect(() => {
    const fetchCoasters = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "coasters"));
        const coasterData = querySnapshot.docs.map((doc) => doc.data());
        setCoasters(coasterData);
      } catch (error) {
        console.error("Error fetching coasters: ", error);
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

  // Statistics for display
  const totalCoasters = coasters.length;
  const woodenCoasters = coasters.filter((coaster) => coaster.Material === "Wood").length;
  const steelCoasters = coasters.filter((coaster) => coaster.Material === "Steel").length;

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
  
  // Process data for top 6 or 10 manufacturers
  const topN = 10; // Change this to 10 if needed
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

      {/* Render Cards*/}
      <InfoCard
        title="Fastest Coaster"
        description={fastestCoaster.Name}
        value={fastestCoaster.Speed}
        unit=" mph"
      />

      {/* Map Section */}
      <div className="map-section">
        <h2>Visited Parks</h2>
        <div className="map-container">
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ResetMapButton center={mapCenter} zoom={mapZoom} />
            {parks
              .filter((park) => park.latitude != null && park.longitude != null)
              .map((park, index) => (
                <Marker
                  key={index}
                  position={[park.latitude, park.longitude]}
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
                    >
                      View Coasters
                    </button>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>

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
        <div className="chart-container">
          <PieChart
            title="Manufacturers"
            dataLabels={manufacturerLabels}
            dataValues={manufacturerValues}
          />
        </div>
      </div>
    </div>
  );
};

export default CoasterPage;