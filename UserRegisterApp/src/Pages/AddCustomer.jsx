import React, { useState, useContext } from "react";
import RegisterForm from "../Components/ResgisterForm";
import { UserContext } from "../DataBase/Context";


const AddCustomer = () => {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);  
  const { addUser } = useContext(UserContext);

  const handleFormSubmit = (newUser) => {
    addUser(newUser);
    setShowForm(false);
    setSuccess(true);       
    setTimeout(() => setSuccess(false), 3000); 
  };

  return (
    <div className="container mx-auto mt-28 px-4">
      {!showForm && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="text-white bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            ➕ New Register
          </button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-[500px]">
            <RegisterForm onSuccess={handleFormSubmit} />
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-700 text-3xl font-bold hover:text-orange-500 transition"
              aria-label="Close form"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Success mesajı */}
      {success && (
        <div
          className="
      fixed
      bottom-10
      left-1/2
      transform
      -translate-x-1/2
      bg-green-500
      text-white
      px-6
      py-3
      rounded-lg
      shadow-lg
      text-base
      font-semibold
      animate-fadeSlideUp
      pointer-events-none
      select-none
      z-50
      
      sm:px-8 sm:py-4 sm:text-lg       /* kiçik ekranlar üçün */
      md:px-10 md:py-5 md:text-xl      /* orta ekranlar üçün */
      lg:px-12 lg:py-6 lg:text-2xl     /* böyük ekranlar üçün */
    "
          role="alert"
        >
          ✅ Uğurla əlavə edildi!
        </div>
      )}
    </div>
  );
};

export default AddCustomer;
