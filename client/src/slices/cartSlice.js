import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempItems: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce((sum, item)=> sum + item.price* item.quantity, 0)
      // const newItem = action.payload;
      // state.items = [...state.items, newItem];
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
