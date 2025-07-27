import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  useSelector((state)=> console.log(state.cart))
  return (
    <div>cart</div>
    //  <div className='mx-auto w-[80%]'>
    //   <h1 className='py-4 underline text-cyan-600 '>Your Cart</h1>
    //   <div className='flex flex-col gap-2 '>
    //     <img className='w-full h-64 object-cover object-top' src={product.image} alt="" />
    //     <p>Product Name: <span className='text-gray-500 text-sm'>{product.name}</span></p>
    //     <p>Product category: <span className='text-gray-500 text-sm'>{product.category}</span></p>
    //     <p>Product title: <span className='text-gray-500 text-sm'>{product.title}</span></p>
    //     <p>Product price: <span className='text-gray-500 text-sm'>{product.price}</span></p>
    //     <p>Product description: <span className='text-gray-500 text-sm'>{product.description}</span></p>
      
    //   </div>
    // </div>
  )
}

export default Cart