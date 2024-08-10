import React from 'react';

const ISSMap = ({ latitude, longitude }) => {
  // Convert lat/long to x/y coordinates
  const x = (longitude + 180) * (800 / 360);
  const y = (90 - latitude) * (400 / 180);

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-gray-100 flex items-center justify-center">
      <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-full max-h-full">
        <image href="https://upload.wikimedia.org/wikipedia/commons/1/17/World_map_blank_without_borders.svg" width="800" height="400" />
        <circle cx={x} cy={y} r="5" fill="red" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ISSMap;