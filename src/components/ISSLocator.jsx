import React from 'react';
import axios from 'axios';
import ISSMap from './ISSMap';
import ISSInfo from './ISSInfo';
import { useQuery } from '@tanstack/react-query';

const fetchISSLocation = async () => {
  const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
  return response.data;
};

const ISSLocator = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['issLocation'],
    queryFn: fetchISSLocation,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading ISS location...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Error fetching ISS location. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Real-Time ISS Locator</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <ISSMap latitude={parseFloat(data.latitude)} longitude={parseFloat(data.longitude)} />
      </div>
      <div className="mt-8">
        <ISSInfo
          latitude={data.latitude}
          longitude={data.longitude}
          timestamp={data.timestamp}
          velocity={data.velocity}
          altitude={data.altitude}
        />
      </div>
    </div>
  );
};

export default ISSLocator;