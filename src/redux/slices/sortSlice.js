import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sorting',
  initialState: {
    sortItem: 0,
  },
  reducers: {
    setSortItem: (state, action) => {
      state.sortItem = action.payload;
    },
  },
});

export const { setSortItem } = sortSlice.actions;

export default sortSlice.reducer;
