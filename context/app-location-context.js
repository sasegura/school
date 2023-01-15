import useLocation from 'hooks/useLocation';
import React, { createContext, useEffect, useState } from 'react';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const locationFromFetch = useLocation();

  useEffect(() => {
    setLocation(locationFromFetch);
    localStorage.setItem('location', locationFromFetch);
  }, [locationFromFetch]);

  useEffect(() => {
    const locationFromStorage = localStorage.getItem('location');
    if (locationFromStorage) {
      setLocation(locationFromStorage);
    }
  }, []);

  const updateLocation = (newStatus) => {
    setLocation(newStatus);
    localStorage.setItem('location', newStatus);
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
