import { useState } from 'react';

const RegisterForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        gender: '',
        city: '',
        phone: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo') {
            setFormData(prev => ({ ...prev, photo: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
        bg-white 
        shadow-md 
        rounded-lg 
        p-5 
        max-w-lg 
        w-full 
        mx-auto 
        space-y-4 
        max-h-[calc(100vh-80px)] 
        overflow-y-auto
        transition-transform 
        duration-300 
        transform 
        hover:scale-102 
        hover:shadow-lg
      "
            style={{ minWidth: '300px' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Ad"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Soyad"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Mail"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Cins (M/F)"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Yaşayış yeri"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Nömrə"
                    onChange={handleChange}
                    className="
            w-full 
            p-2.5 
            border 
            border-gray-300 
            rounded 
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-transparent 
            transition
          "
                    required
                />
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
          rounded 
          p-2 
          cursor-pointer 
          focus:outline-none 
          focus:ring-2 
          focus:ring-orange-400 
          transition
        "
            />

            <button
                type="submit"
                className="
          bg-orange-500 
          hover:bg-orange-600 
          text-white 
          font-semibold 
          py-2.5 
          px-6 
          rounded 
          shadow 
          w-full 
          transition 
          duration-300 
          transform 
          hover:scale-105
        "
            >
                Send
            </button>
        </form>
    );
};

export default RegisterForm;
