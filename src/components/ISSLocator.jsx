import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ISSMap from './ISSMap';
import ISSInfo from './ISSInfo';
import { useQuery } from '@tanstack/react-query';

const fetchISSLocation = async () => {
  const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
  return response.data;
};

const fetchISSTrajectory = async () => {
  const now = Math.floor(Date.now() / 1000);
  const pastStart = now - 3600; // 1 hour ago
  const futureEnd = now + 3600; // 1 hour in the future
  const response = await axios.get(`https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${pastStart},${now},${futureEnd}&units=kilometers`);
  return response.data;
};

const ISSLocator = () => {
  const [pastTrajectory, setPastTrajectory] = useState([]);
  const [futureTrajectory, setFutureTrajectory] = useState([]);

  const { data: currentLocation, isLoading: isLoadingLocation, isError: isErrorLocation } = useQuery({
    queryKey: ['issLocation'],
    queryFn: fetchISSLocation,
    refetchInterval: 5000,
  });

  const { data: trajectoryData, isLoading: isLoadingTrajectory, isError: isErrorTrajectory } = useQuery({
    queryKey: ['issTrajectory'],
    queryFn: fetchISSTrajectory,
    refetchInterval: 60000, // Refresh every minute
  });

  useEffect(() => {
    if (trajectoryData) {
      const now = Math.floor(Date.now() / 1000);
      const past = trajectoryData.filter(point => point.timestamp < now).map(point => [point.latitude, point.longitude]);
      const future = trajectoryData.filter(point => point.timestamp >= now).map(point => [point.latitude, point.longitude]);
      
      setPastTrajectory(past);
      setFutureTrajectory(future);
    }
  }, [trajectoryData]);

  if (isLoadingLocation || isLoadingTrajectory) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (isErrorLocation || isErrorTrajectory) {
    return <div className="text-center py-10 text-red-500">Error fetching ISS data. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Real-Time ISS Tracker</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <ISSMap 
          latitude={parseFloat(currentLocation.latitude)} 
          longitude={parseFloat(currentLocation.longitude)}
          pastTrajectory={pastTrajectory}
          futureTrajectory={futureTrajectory}
        />
      </div>
      <ISSInfo
        latitude={currentLocation.latitude}
        longitude={currentLocation.longitude}
        timestamp={currentLocation.timestamp}
        velocity={currentLocation.velocity}
        altitude={currentLocation.altitude}
      />
    </div>
  );
};

export default ISSLocator;