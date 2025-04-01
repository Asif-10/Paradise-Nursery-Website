import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],        // { id, name, price, image, quantity }
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalCost += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex(i => i.id === id);
      if (index !== -1) {
        const item = state.items[index];
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
