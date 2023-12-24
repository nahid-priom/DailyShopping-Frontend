import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productData: [],
  userInfo: null,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      }
      else {
        state.productData.push(action.payload)
      }
    },
  },
});

export const { addToCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;
