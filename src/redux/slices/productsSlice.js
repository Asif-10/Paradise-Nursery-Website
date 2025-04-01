import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Rose Plant',
      category: 'Foliage',
      price: 25,
      image: '/assets/roseplant.jpg',
    },
    {
      id: 2,
      name: 'Spider Plant',
      category: 'Succulents',
      price: 18,
      image: '/assets/spiderplant.jpg',
    },
    {
      id: 3,
      name: 'Lilly Plant',
      category: 'Foliage',
      price: 30,
      image: '/assets/lillyplant.jpg',
    },
    {
      id: 4,
      name: 'Aloe Vera Plant',
      category: 'Flowering',
      price: 22,
      image: '/assets/aloeveraplant.jpg',
    },
    {
      id: 5,
      name: 'Orchids Plant',
      category: 'Hanging',
      price: 15,
      image: '/assets/orchidsplant.jpg',
    },
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
