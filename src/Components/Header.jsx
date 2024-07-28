import React from 'react'
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { toggleCart } from '../features/cart/CartSlice';
import { useSelector } from 'react-redux';
import { setSearch } from '../features/search/searchSlice';


const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart)
  const totalQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty,0)
  const handleCartToggle = () => {
      dispatch(toggleCart()); // Dispatch the toggleCart action to change cart visibility
  };

  
  


  return (
   <>
   <div className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
    <div>
        <h3 className='text-xl font-bold text-gray-600 '>{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className='text-2xl font-bold'>foods</h1>

    </div>
    <div className='flex gap-10 items-center text-2xl'>
        <input  onChange={(e) => dispatch(setSearch(e.target.value))} type="search" name="search" placeholder='search here'
        className='p-3 border border-gray-400 rounded-lg outline-none text-sm w-full lg:w-[25vw]'></input>
<HiMiniShoppingCart
  onClick={handleCartToggle}
  className={`text-5xl shadow-md p-3 rounded-full cursor-pointer transform transition-transform duration-150 ease-in-out active:scale-90 ${totalQty>0 && "animate-bounce delay-500 transition-all"}`}
/>
    </div>
   </div>
   </>
  )}


export default Header