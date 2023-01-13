import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [layoutTitle, setLayoutTitle] = useState('');

  return (
    <AppContext.Provider value={{ layoutTitle, setLayoutTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
