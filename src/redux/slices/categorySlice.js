import { createSlice } from '@reduxjs/toolkit';

export const categorysSlice = createSlice({
  name: 'categoriya',
  initialState: {
    category: 0,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorysSlice.actions;

export default categorysSlice.reducer;
