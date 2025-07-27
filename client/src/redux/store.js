import {configureStore} from '@reduxjs/toolkit'
import productListReducer from '../slices/productListSlice'
import productDetailReducer from '../slices/productDetailSlice'
const store = configureStore({
    reducer :{
        products: productListReducer,
        product:productDetailReducer,
    }
})
export default store