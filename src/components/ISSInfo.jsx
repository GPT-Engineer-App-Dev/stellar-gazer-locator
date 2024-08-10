import React from 'react';

const ISSInfo = ({ latitude, longitude, timestamp }) => {
  const formatCoordinate = (coord) => coord.toFixed(4);
  const formatTimestamp = (ts) => new Date(ts * 1000).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">ISS Current Location</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Latitude</p>
          <p className="text-lg font-semibold text-gray-800">{formatCoordinate(latitude)}°</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Longitude</p>
          <p className="text-lg font-semibold text-gray-800">{formatCoordinate(longitude)}°</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-500">Last Updated</p>
        <p className="text-lg font-semibold text-gray-800">{formatTimestamp(timestamp)}</p>
      </div>
    </div>
  );
};

export default ISSInfo;