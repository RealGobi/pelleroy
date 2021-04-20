import React, { useState, createContext } from 'react';

export const AuthContext = createContext<any>(null);

export const AuthProvider = (props: {children?: React.ReactChild}) => {
  const [auth, setAuth] = useState();
  const { children } = props;

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
};