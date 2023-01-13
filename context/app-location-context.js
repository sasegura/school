import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('es');

  const updateLocation = (newStatus) => {
    setLocation(newStatus);
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
