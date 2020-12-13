import React, { createContext, useState } from 'react';

const TabsContext = createContext({});

const TabsContextProvider = ({ children }) => {
  const [tab, setTab] = useState('info');

  return (
    <TabsContext.Provider value={{ tab, setTab}}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsContext, TabsContextProvider };