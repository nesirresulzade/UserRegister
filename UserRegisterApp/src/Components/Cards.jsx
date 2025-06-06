import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../DataBase/Context';

const Cards = ({ customers }) => {
  const navigate = useNavigate();
  const { setSelectedUser } = useContext(UserContext);

  const handleCardClick = (user) => {
    setSelectedUser(user);
    navigate("/info-user");
  };

  return (
    <div className="flex flex-wrap gap-6 py-6 px-4 max-w-full">
      {customers.length === 0 ? (
        <p className="text-gray-500">No customers to display.</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            onClick={() => handleCardClick(customer)}
            className="
              bg-white 
              shadow-md 
              rounded-2xl 
              p-6 
              flex 
              flex-col 
              items-center 
              transition-transform 
              duration-300 
              transform 
              hover:scale-105 
              hover:shadow-xl 
              cursor-pointer

              w-full         // Kiçik ekranlarda tam genişlik
              md:w-1/3       // 768px və yuxarı 3 sütun
              lg:w-1/4       // 1024px və yuxarı 4 sütun
              xl:w-1/5       // 1280px və yuxarı 5 sütun
            "
          >
            <img
              src={
                typeof customer.avatar === "object"
                  ? URL.createObjectURL(customer.avatar)
                  : customer.avatar || "https://via.placeholder.com/100"
              }
              alt={`${customer.firstName} ${customer.lastName}`}
              className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-orange-400"
            />
            <h2 className="text-xl font-semibold text-orange-600 mb-1 text-center">
              {customer.firstName} {customer.lastName}
            </h2>
            <p className="text-gray-600 text-center text-sm">
              <span className="font-medium">📍 Address:</span> {customer.address || "-"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
