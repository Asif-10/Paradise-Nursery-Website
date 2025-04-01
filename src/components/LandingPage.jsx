import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../../public/assets/bg.png"

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Paradise Nursery</h1>
      <p className="text-lg max-w-xl mb-6 drop-shadow-md">
        Welcome to Paradise Nursery, your one-stop shop for lush houseplants.
        Explore our curated selection and bring natural beauty into your home.
      </p>
      <button
        onClick={() => navigate('/products')}
        className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition duration-200"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
