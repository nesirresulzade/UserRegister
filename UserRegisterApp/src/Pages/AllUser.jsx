import React, { useContext } from 'react';
import { UserContext } from '../DataBase/Context';
import Cards from '../Components/Cards';

const AllUser = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">All Users</h1>
      <Cards customers={users} />
    </div>
  );
};

export default AllUser;
