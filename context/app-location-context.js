import React, { createContext, useEffect, useState } from 'react';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('es');

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
