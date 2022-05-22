import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const { Provider } = StateContext;

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return <Provider value={{ activeMenu, setActiveMenu }}>{children}</Provider>;
};

export const useStateContext = () => useContext(StateContext);
