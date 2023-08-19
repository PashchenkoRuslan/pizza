import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sortItem: 0,
};

export const allSortSlice = createSlice({
  name: 'categoriya',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortItem: (state, action) => {
      state.sortItem = action.payload;
    },
  },
});

export const { setCategory, setSortItem } = allSortSlice.actions;

export default allSortSlice.reducer;
