import React, { createContext, useState } from 'react';

// Context yaradılır
export const UserContext = createContext();

// Provider komponent
export const UserProvider = ({ children }) => {
  // Burada istifadəçi məlumatlarının saxlanacağı state
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Aysel',
      lastName: 'Məmmədova',
      email: 'aysel@example.com',
      address: 'Bakı, Azərbaycan',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 2,
      firstName: 'Elvin',
      lastName: 'Əliyev',
      email: 'elvin@example.com',
      address: 'Gəncə, Azərbaycan',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
  ]);
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { ...user, id: Date.now() }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
