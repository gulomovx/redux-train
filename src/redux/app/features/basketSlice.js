import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount++;
    },
    decrement: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount--;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((item) => {
        return item.name !== payload;
      });
      },
      updateTotal: (state) => {
        
    }
  }
});
export const { increment, decrement, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
