import {configureStore} from '@reduxjs/toolkit'
import productListReducer from '../slices/productListSlice'
import productDetailReducer from '../slices/productDetailSlice'
import cartReducer from '../slices/cartSlice'
const store = configureStore({
    reducer :{
        products: productListReducer,
        product:productDetailReducer,
        cart: cartReducer
    }
})
export default store