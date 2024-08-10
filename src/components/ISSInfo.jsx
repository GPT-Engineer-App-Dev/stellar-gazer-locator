import React from 'react';

const ISSInfo = ({ latitude, longitude, timestamp, velocity, altitude }) => {
  const formatCoordinate = (coord) => coord.toFixed(4);
  const formatTimestamp = (ts) => new Date(ts * 1000).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">ISS Current Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Latitude</p>
          <p className="text-lg font-semibold text-gray-800">{formatCoordinate(latitude)}°</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Longitude</p>
          <p className="text-lg font-semibold text-gray-800">{formatCoordinate(longitude)}°</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Altitude</p>
          <p className="text-lg font-semibold text-gray-800">{altitude.toFixed(2)} km</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Velocity</p>
          <p className="text-lg font-semibold text-gray-800">{velocity.toFixed(2)} km/h</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm font-medium text-gray-500">Last Updated</p>
          <p className="text-lg font-semibold text-gray-800">{formatTimestamp(timestamp)}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-500">Trajectory Legend</p>
        <div className="flex items-center mt-2">
          <div className="w-4 h-4 bg-blue-500 mr-2"></div>
          <p className="text-sm text-gray-700">Past Trajectory (1 hour)</p>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-4 h-4 bg-red-500 mr-2"></div>
          <p className="text-sm text-gray-700">Future Trajectory (1 hour)</p>
        </div>
      </div>
    </div>
  );
};

export default ISSInfo;