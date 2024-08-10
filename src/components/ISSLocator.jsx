import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ISSMap from './ISSMap';
import ISSInfo from './ISSInfo';
import { useQuery } from '@tanstack/react-query';

const fetchISSLocation = async () => {
  const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
  return response.data;
};

const ISSLocator = () => {
  const [trajectory, setTrajectory] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['issLocation'],
    queryFn: fetchISSLocation,
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (data) {
      setTrajectory(prevTrajectory => {
        const newTrajectory = [...prevTrajectory, [data.latitude, data.longitude]];
        const updatedTrajectory = newTrajectory.slice(-20); // Keep only the last 20 positions
        console.log('Updated trajectory:', updatedTrajectory); // Debug log
        return updatedTrajectory;
      });
    }
  }, [data]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Error fetching ISS location. Please try again later.</div>;
  }

  console.log('Current trajectory:', trajectory); // Debug log

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Real-Time ISS Tracker</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <ISSMap 
          latitude={parseFloat(data.latitude)} 
          longitude={parseFloat(data.longitude)}
          trajectory={trajectory}
        />
      </div>
      <ISSInfo
        latitude={data.latitude}
        longitude={data.longitude}
        timestamp={data.timestamp}
        velocity={data.velocity}
        altitude={data.altitude}
      />
    </div>
  );
};

export default ISSLocator;