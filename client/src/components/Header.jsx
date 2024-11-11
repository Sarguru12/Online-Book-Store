import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">Books Wagon</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/best-sellers" className="text-gray-600 hover:text-gray-800">Best Sellers</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-600 hover:text-gray-800">New Arrivals</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-gray-800">Cart</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;