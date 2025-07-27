import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {
    item: products,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
  const handleRemoveButton = (id)=>{
       dispatch(removeFromCart())
  }

  return (
    <div className="mx-auto w-[80%]  shadow-md p-3">
      <h1 className="py-4 underline text-cyan-600 ">Your Cart</h1>
      {/* {products.length > 0 ? (
        <>
          <p>
            your cart is empty go to <Link to={"/"}>Shopping</Link>
          </p>
        </>
      */}
        <div className="flex flex-col gap-6 ">
          {products.map((product) => (
            <div className="w-full px-3 md:px-6  mx-auto flex justify-between items-center bottom-2 shadow-md" key={product.id}>
              <div className="w-full px-4" >
                <img
                  src={product.image}
                  alt=""
                  className="h-14 w object-contain object-center rounded-lg"
                />
                <p className="text-gray-500 text-sm w-48 py-3">{product.title}</p>
                  <div className="flex gap-4 items-center  py-3 ">
        <button className="px-2 py-0.5 bg-yellow-500 text-gray-100 rounded-md hover:bg-yellow-700" >update</button>
        <button onClick={handleRemoveButton(product.id)} className="px-2 py-0.5 bg-red-500 text-red-100 rounded-md hover:bg-red-700" >delete</button>

      </div>
              </div>
               
              <div className="">
                <p>${product.price}</p>
                <p>qty={product.quantity}</p>
                
              </div>
            </div>
          ))}
        </div>
      
      <div className="max-w-[80%] mx-auto font-bold text-xl flex justify-between items-center pt-14">
        <p>Total price:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center  pt-6 ">
        <Link className="px-4 py-2 bg-green-500 text-gray-100 rounded-md hover:bg-green-700" to={'/'}>Back to Shopping</Link>
        <Link className="px-4 py-2 bg-gray-500 text-gray-100 rounded-md hover:bg-gray-700" to={'/checkout'}>go to checkout</Link>

      </div>
    </div>
  );
};

export default Cart;
