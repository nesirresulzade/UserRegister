import React, { useState } from "react";

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    city: "",
    phone: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const avatarUrl = formData.photo
      ? URL.createObjectURL(formData.photo)
      : "https://via.placeholder.com/100";

    const newUser = {
      firstName: formData.name,
      lastName: formData.surname,
      email: formData.email,
      gender: formData.gender,
      address: formData.city,
      phone: formData.phone,
      avatar: avatarUrl,
    };

    onSuccess(newUser);

    setFormData({
      name: "",
      surname: "",
      email: "",
      gender: "",
      city: "",
      phone: "",
      photo: null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        shadow-xl
        rounded-2xl
        p-6
        w-full
        max-w-[500px]
        mx-auto
        space-y-6
        max-h-[90vh]
        overflow-y-auto
        scrollbar-thin
        scrollbar-thumb-orange-400
        scrollbar-track-gray-200
      "
      style={{ boxSizing: "border-box" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "name", placeholder: "Ad" },
          { name: "surname", placeholder: "Soyad" },
          { name: "email", placeholder: "E-mail", type: "email" },
          { name: "gender", placeholder: "Cins (M/F)" },
          { name: "city", placeholder: "Yaşayış yeri" },
          { name: "phone", placeholder: "Telefon nömrəsi" },
        ].map(({ name, placeholder, type = "text" }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              border
              border-gray-300
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-orange-400
              focus:border-transparent
              transition
              placeholder-gray-400
              text-gray-700
              font-medium
            "
          />
        ))}
      </div>

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleChange}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          p-3
          cursor-pointer
          focus:outline-none
          focus:ring-2
          focus:ring-orange-400
          transition
          text-gray-600
          font-medium
        "
      />

      <button
        type="submit"
        className="
          bg-gradient-to-r
          from-orange-400
          to-orange-600
          text-white
          font-semibold
          py-3
          rounded-lg
          shadow-md
          w-full
          hover:from-orange-500
          hover:to-orange-700
          transition
          duration-300
          transform
          hover:scale-105
          cursor-pointer
        "
      >
        Göndər
      </button>
    </form>
  );
};

export default RegisterForm;
