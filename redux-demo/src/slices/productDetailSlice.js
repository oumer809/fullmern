import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProduct = createAsyncThunk('/product/fetchProduct', async (id) => {
    const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data;
})

const productDetailSlice = createSlice({
    name:'product',
    initialState:{
        item:null,
        status: 'idle'
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending, (state)=>{
            state.status ='loading'
        })
        .addCase(fetchProduct.fulfilled, (state,action)=>{
            state.status = 'succeeded',
            state.item =action.payload
        })
        .addCase(fetchProduct.rejected, (state)=>{
            state.status ='failed'
        })
    }
})

export default productDetailSlice.reducer