import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { geoEqualEarth } from 'd3-geo';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const ISSMap = ({ latitude, longitude }) => {
  return (
    <ComposableMap
      projection={geoEqualEarth()}
      projectionConfig={{
        scale: 200,
      }}
      className="w-full h-[400px] md:h-[600px]"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2C3E50"
              stroke="#EAEAEC"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[longitude, latitude]}>
        <circle r={8} fill="#E74C3C" stroke="#fff" strokeWidth={2} />
      </Marker>
    </ComposableMap>
  );
};

export default ISSMap;