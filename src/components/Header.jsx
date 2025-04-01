import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        Paradise Nursery
      </Link>

      <nav className="space-x-6 flex items-center">
        <Link to="/products" className="hover:underline text-white text-lg">
          Shop
        </Link>
        <Link to="/cart" className="relative inline-block">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
