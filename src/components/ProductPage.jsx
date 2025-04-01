import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductPage = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Our Houseplants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{plant.name}</h3>
            <p className="text-green-800 font-bold text-lg">${plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
