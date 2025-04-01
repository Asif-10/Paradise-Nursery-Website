import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, totalItems, totalCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Your Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="font-bold">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-700">
                    ${item.quantity * item.price}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <p className="text-lg font-bold">Total Items: {totalItems}</p>
            <p className="text-xl font-bold text-green-700">
              Total Cost: ${totalCost}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-end">
              <Link
                to="/products"
                className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => dispatch(clearCart())}
                className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
