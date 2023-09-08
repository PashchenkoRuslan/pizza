import { configureStore } from '@reduxjs/toolkit';
import allSortSlice from './slices/allSortSlice';
import cartSlice from './slices/cartSlice';

export default configureStore({
  reducer: {
    allSort: allSortSlice,
    cart: cartSlice,
  },
});
