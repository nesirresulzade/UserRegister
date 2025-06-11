import { UserPlus, Users, Info, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: '/new-register', label: 'New Register', icon: <UserPlus className="w-5 h-5" /> },
    { to: '/all-user', label: 'All Users', icon: <Users className="w-5 h-5" /> },
    { to: '/info-user', label: 'Info User', icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#f8f9fa] shadow-md p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-orange-500">UserPanel</div>

          {/* Desktop menyu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
            {navItems.map(({ to, label, icon }) => {
              const isActive = currentPath === to;

              return (
                <li key={to} className="relative">
                  <Link
                    to={to}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 relative ${isActive
                        ? 'text-orange-500 font-semibold'
                        : 'text-gray-700 hover:text-orange-500'
                      }`}
                  >
                    {/* Oval göstərici */}
                    {isActive && (
                      <span className="absolute inset-0 bg-orange-100 rounded-full -z-10 scale-110 transition-all duration-300"></span>
                    )}
                    {icon}
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
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
            {navItems.map(({ to, label, icon }) => {
              const isActive = currentPath === to;

              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${isActive
                      ? 'bg-orange-100 text-orange-500 font-semibold'
                      : 'text-gray-700 hover:text-orange-500'
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      <div className="h-16 md:h-16"></div>
    </>
  );
};

export default Navbar;
