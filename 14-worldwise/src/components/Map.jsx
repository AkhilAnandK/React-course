import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Map.module.css";
import Sidebar from "./Sidebar";
import { useCities } from "../context/CitiesContext";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { getFlagImageUrl } from "../utils";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
        style={{ height: "100vh", width: "100%" }} // 3. Ensure container has dimensions
      >
        {/* TileLayer provides the map imagery (OpenStreetMap in this example) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <img
                className={styles.popupFlag}
                src={getFlagImageUrl(city.emoji)}
                alt=""
              />
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
