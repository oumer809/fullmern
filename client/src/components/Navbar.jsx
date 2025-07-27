import React from "react";
// import { IoBagHandleSharp } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-32">
      <Link to={"/"} className="text-3xl font-bold">
        Shopping cart
      </Link>
      <Link to={"/cart"}>
        <div className="flex items-center">
          <CiShoppingCart size={30} />
          <span className="bg-red-500 text-white w-4 h-4 ml-[-13px] mt-[-14px] rounded-full flex justify-center items-center">
            0
          </span>
        </div>{" "}
      </Link>
    </div>
    // <div className='flex justify-between items-center p-4 shadow-md border-b-2 bg-white'>
    //   <div className='flex gap-3 text-xl font-bold w-3/6'>
    //     <IoBagHandleSharp className='text-pink-950' />
    //     E-commerce
    //   </div>
    //   <div className='flex items-center w-full'>
    //     <input type="text" placeholder='Search...' className='flex-grow text-gray-500 text-sm border border-gray-400 rounded-l px-3 py-1' />
    //     <CiSearch size={30} className='bg-red-500 text-white rounded px-1 font-bold' />
    //   </div>
    //   <div className='flex gap-3 items-center w-3/6 ml-10'>
    //     <CgProfile size={30} className='text-gray-600'/>
    //     <div className='flex items-center'>
    //       <FaShoppingCart size={30}/>
    //       <div className='flex bg-red-600 ml-[-14px] mt-[-22px] w-5 h-5 text-white items-center rounded-full justify-center '>0</div>
    //     </div>
    //     <Link to={'/login'} className='px-4 py-1 bg-red-600 hover:bg-red-800 text-gray-300 rounded-lg'>Login</Link>
    //   </div>
    // </div>
  );
};

export default Navbar;
