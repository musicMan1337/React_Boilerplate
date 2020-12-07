import React from 'react';

const ThingContext = React.createContext(null);

const ThingProvider = ({ children }) => {
  const value = {};

  return (
    <ThingContext.Provider value={value}>
      {children}
    </ThingContext.Provider>
  );
};

const useThingContext = () => {
  return React.useContext(ThingContext);
};

export { ThingProvider, useThingContext };
