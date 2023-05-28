import React from "react";

export const AuthContext = React.createContext({
  idInstance: null,
  apiTokenInstance: null,
  setIdInstance: () => {},
  setApiTokenInstance: () => {},
});
