import React from 'react';

const Cards = ({ customers }) => {
  return (
    <div className="flex space-x-6 overflow-x-auto py-6 px-4 max-w-full scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
      {customers.length === 0 ? (
        <p className="text-gray-500">No customers to display.</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            className="min-w-[280px] bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              {customer.firstName} {customer.lastName}
            </h2>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Email:</span> {customer.email || "-"}
            </p>
            {customer.phone && (
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Phone:</span> {customer.phone}
              </p>
            )}
            <p className="text-gray-700">
              <span className="font-medium">Address:</span> {customer.address || "-"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
