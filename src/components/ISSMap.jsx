import React from 'react';
import WorldMap from 'react-svg-worldmap';

const ISSMap = ({ latitude, longitude }) => {
  const data = [
    { country: 'ISS', value: 1, coordinates: [longitude, latitude] }
  ];

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-gray-100">
      <WorldMap
        color="lightblue"
        valueSuffix="ISS"
        size="responsive"
        data={data}
        styleFunction={() => ({
          fill: '#ECEFF1',
          stroke: '#607D8B',
          strokeWidth: 0.5,
          strokeOpacity: 0.2,
          cursor: 'pointer'
        })}
      />
    </div>
  );
};

export default ISSMap;