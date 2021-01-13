import { createSlice } from '@reduxjs/toolkit';

const rateSlice = createSlice({
  name: "rate",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const {
  increment: incrementRate,
  decrement: decrementRate,
} = rateSlice.actions;

export default rateSlice.reducer;
