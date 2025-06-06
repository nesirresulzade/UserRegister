import React, { useContext } from "react";
import { UserContext } from "../DataBase/Context";

const UserInfo = () => {
  const { selectedUser } = useContext(UserContext);

  if (!selectedUser) {
    return (
      <div className="pt-[64px] flex items-center justify-center h-[calc(100vh-64px)] bg-gray-100">
        <p className="text-gray-500 text-xl">İstifadəçi seçilməyib</p>
      </div>
    );
  }

  return (
    <div className="pt-[64px] h-[calc(100vh-64px)] bg-gray-100 overflow-hidden flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl">
        {/* Şəkil və ad */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={
              selectedUser.avatar
                ? typeof selectedUser.avatar === "object"
                  ? URL.createObjectURL(selectedUser.avatar)
                  : selectedUser.avatar
                : "https://via.placeholder.com/200"
            }
            alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
            className="w-40 h-40 rounded-full object-cover border-4 border-orange-500"
          />
          <h2 className="text-3xl font-bold mt-4 text-orange-600 text-center">
            {selectedUser.firstName} {selectedUser.lastName}
          </h2>
        </div>

        {/* Məlumatlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700">
          <div>
            <p className="font-semibold">📧 Email:</p>
            <p>{selectedUser.email || "-"}</p>
          </div>
          <div>
            <p className="font-semibold">📞 Telefon:</p>
            <p>{selectedUser.phone || "-"}</p>
          </div>
          <div>
            <p className="font-semibold">🏠 Ünvan:</p>
            <p>{selectedUser.address || "-"}</p>
          </div>
          <div>
            <p className="font-semibold">⚧️ Gender:</p>
            <p>{selectedUser.gender || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
