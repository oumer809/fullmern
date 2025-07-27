import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';

const ProductCard = ({product}) => {
    const dispatch =useDispatch()

 
    return (
        <div className='px-6'>
            <Link to={`/products/${product.id}`}>
             <div className='overflow-hidden rounded-lg'>
                <img src={product.image} alt="" className='h-48 py-2  w-full object-contain object-center'/>
            </div>
            </Link>
           
            <div className='flex justify-around '>
                <p>{product.title}</p>
                <p>${product.price}</p>
               
            </div>
            <button onClick={()=>dispatch(addToCart(product))} className='bg-gray-500 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-center w-full transition-all ease-in-out'>Add To Cart</button>
        </div>
       
    );
}

export default ProductCard