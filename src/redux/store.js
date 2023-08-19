import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/categorySlice';
import sortSlice from './slices/sortSlice';
import allSortSlice from './slices/allSortSlice';

export default configureStore({
  reducer: {
    allSort: allSortSlice,
    // categoriya: categorySlice,
    // sorting: sortSlice,
  },
});
