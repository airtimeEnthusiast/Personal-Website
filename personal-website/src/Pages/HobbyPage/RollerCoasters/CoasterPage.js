import React, { useState, useEffect } from "react";
import CoasterCard from "./CoasterCard";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CoasterPage.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

import "leaflet/dist/leaflet.css";

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

const CoasterPage = () => {
  const [coasters, setCoasters] = useState([]);
  const [parks, setParks] = useState([]);
  const mapCenter = [37.8, -96]; // Center on the US
  const mapZoom = 4; // Default zoom level

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

    // Fetch parks
    const fetchParks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "parks"));
        const parkData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          latitude: doc.data().Coordinates[0],
          longitude: doc.data().Coordinates[1],
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
            {/* Base map layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <ResetMapButton center={mapCenter} zoom={mapZoom} />
            {/* Render markers */}
            {parks
              .filter((park) => park.latitude != null && park.longitude != null) // Only valid parks
              .map((park, index) => (
                <Marker
                  key={index}
                  position={[park.latitude, park.longitude]} // Pass valid coordinates
                >
                  <Popup>
                    <b>{park.Name}</b>
                    <br />
                    City: {park.City}
                    <br />
                    State: {park.State}
                    <br />
                    Coasters: {park.Coaster_IDs?.length || 0}
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>

      {/* Coaster List */}
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
    </div >
  );
};

export default CoasterPage;