import React, { createContext, useContext, useState } from 'react';

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [builderConfig, setBuilderConfig] = useState(null);

  return (
    <DataContext.Provider value={{ builderConfig, setBuilderConfig }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useBuilderConfig = () => {
  return useContext(DataContext);
};
