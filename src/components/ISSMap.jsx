import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom ISS icon
const issIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
  iconSize: [50, 30],
  iconAnchor: [25, 15],
  popupAnchor: [0, -15]
});

function SetViewOnChange({ coords }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords]);
  return null;
}

const ISSMap = ({ latitude, longitude, pastTrajectory, futureTrajectory }) => {
  const position = [latitude, longitude];

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={3} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={issIcon}>
          <Popup>
            ISS is here!<br />Latitude: {latitude.toFixed(4)}<br />Longitude: {longitude.toFixed(4)}
          </Popup>
        </Marker>
        {pastTrajectory.length > 1 && (
          <Polyline positions={pastTrajectory} color="blue" weight={3} opacity={0.7} />
        )}
        {futureTrajectory.length > 1 && (
          <Polyline positions={futureTrajectory} color="red" weight={3} opacity={0.7} dashArray="5, 10" />
        )}
        <SetViewOnChange coords={position} />
      </MapContainer>
    </div>
  );
};

export default ISSMap;