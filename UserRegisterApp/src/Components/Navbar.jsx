import { UserPlus, Users, Info, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#f8f9fa] shadow-md p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-orange-500">UserPanel</div>

          {/* Desktop menyu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li className="flex items-center space-x-2 group">
              <UserPlus className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-all duration-200" />
              <Link
                to="/new-register"
                className="hover:text-orange-500 transition-all duration-200"
              >
                New Register
              </Link>
            </li>
            <li className="flex items-center space-x-2 group">
              <Users className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-all duration-200" />
              <Link
                to="/all-user"
                className="hover:text-orange-500 transition-all duration-200"
              >
                All Users
              </Link>
            </li>
            <li className="flex items-center space-x-2 group">
              <Info className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-all duration-200" />
              <Link
                to="/info-user"
                className="hover:text-orange-500 transition-all duration-200"
              >
                Info User
              </Link>
            </li>
          </ul>

          {/* Mobil menyu düyməsi */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobil menyu */}
        {menuOpen && (
          <div className="md:hidden mt-3 mx-4 p-4 rounded-xl bg-white shadow-lg border border-gray-200 transition-all duration-300 space-y-3">
            <Link
              to="/new-register"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <UserPlus className="w-5 h-5" />
              <span>New Register</span>
            </Link>
            <Link
              to="/all-user"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span>All Users</span>
            </Link>
            <Link
              to="/info-user"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <Info className="w-5 h-5" />
              <span>Info User</span>
            </Link>
          </div>
        )}
      </nav>

      {/* Navbar hündürlüyü qədər yuxarıdan boşluq veririk ki, content gizlənməsin */}
      <div className="h-16 md:h-16"></div>
    </>
  );
};

export default Navbar;
