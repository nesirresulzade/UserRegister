import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser , selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};
