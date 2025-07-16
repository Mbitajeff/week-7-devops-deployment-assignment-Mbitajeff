import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-center space-x-6">
      <Link to="/login" className="text-white hover:text-blue-400 font-semibold">Login</Link>
      <Link to="/register" className="text-white hover:text-blue-400 font-semibold">Register</Link>
      <Link to="/dashboard" className="text-white hover:text-blue-400 font-semibold">Dashboard</Link>
      {isLoggedIn && (
        <>
          <Link to="/profile" className="text-white hover:text-blue-400 font-semibold">Profile</Link>
          <button onClick={handleLogout} className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold ml-4">
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar; 