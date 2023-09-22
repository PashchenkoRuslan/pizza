import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({ category, sorting, sortBy, currentPage, elementOfPagination, searchItems }) => {
    const { data } = await axios.get(
      `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
        category > 0 ? `category=${category}` : ''
      }&sortBy=${
        sorting[sortBy]
      }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
    );
    return data;
  },
);

const initialState = {
  pizzas: [],
  isLoading: true,
};

export const allSortSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      console.log('pending');
      state.isLoading = true;
      state.pizzas = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.pizzas = action.payload;
      state.isLoading = false;
      // console.log('action.payload', action.payload);
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.isLoading = false;
      console.log('rejected');
      state.pizzas = [];
    },
  },
});

export const { setPizzas, setIsLoading } = allSortSlice.actions;

export default allSortSlice.reducer;
