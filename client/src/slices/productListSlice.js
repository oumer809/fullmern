import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
 
    return response.data;
    
  }
);

const productListSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle"
  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
        
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded",
        state.items = action.payload 
       
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed"        
      });
  },
});

export default productListSlice.reducer;
