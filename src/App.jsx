import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NewRegister from './Pages/AddCustomer';
import AllUser from './Pages/AllUser';
import InfoUser from './Pages/UserInfo';
import { UserContext } from './DataBase/Context';


const App = () => {
  const { users, addUser } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/new-register"
          element={<NewRegister onSuccess={addUser} />}
        />
        <Route
          path="/all-user"
          element={<AllUser customers={users} />}
        />
        <Route path="/info-user" element={<InfoUser />} />
      </Routes>
    </>
  );
};

export default App;
