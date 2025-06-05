import React, { useState, useEffect } from 'react';
import RegisterForm from '../Components/ResgisterForm';
import SuccessMessage from '../Components/SuccessMessage';

function AddCustomer() {
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll-un qarşısını almaq üçün body-nin overflow-nu dəyişirik
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'; // scroll dayandırılır
    } else {
      document.body.style.overflow = 'auto'; // scroll açılır
    }
    // Component unmount zamanı da scroll-u bərpa et
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);

  const handleRegisterClick = () => {
    setShowForm(true);
    setIsSuccess(false);
  };

  const handleFormSubmit = () => {
    setIsSuccess(true);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 pt-20">
      {!showForm && !isSuccess && (
        <button
          onClick={handleRegisterClick}
          className="text-white bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-xl shadow-lg transition-all duration-300"
        >
          ➕ New Register
        </button>
      )}

      {/* Modal arxa plan və form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <RegisterForm onSuccess={handleFormSubmit} />
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-orange-500 transition"
            aria-label="Close form"
          >
            &times;
          </button>
        </div>
      )}

      {isSuccess && <SuccessMessage />}
    </div>
  );
}

export default AddCustomer;
