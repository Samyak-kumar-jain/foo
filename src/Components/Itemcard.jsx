import React from 'react'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/CartSlice';
import { incrementQty,decrementQty } from '../features/cart/CartSlice';
import toast from 'react-hot-toast';
const Itemcard = ({ id, name, price, img, qty }) => {

    const dispatch = useDispatch();

    const handleDec =() =>{
        qty>1? dispatch(decrementQty(id)):(qty=1)
    }
    const handleInc =() =>{
        dispatch(incrementQty(id))
    }


   
    return (
        <>
            <div className='flex gap-2 shadow-sm rounded-lg p-2 mt-2 border-gray-200 border-2 '>
            <MdDelete
    onClick={() => {
        dispatch(removeFromCart(id)); // Dispatch the action
        toast.success('Item removed from cart', { // Show toast notification
            icon: '👏',
        });
    }}
    className='absolute right-7 text-gray-800 cursor-pointer'
/>
                   
                <img src={img} alt="" className='w-[40px] h-[40px]'></img>
                <div className='leading-5'>
                    <h2 className='font-bold text-gray-800 text-sm w-32'>
                        {name}
                    </h2>
                    <div className='flex justify-between'>
                        <span className='text-green-500 font-bold text-sm'>₹{price}</span>
                        <div className='flex justify-center items-center gap-1 absolute right-7'>
                        <FiMinus onClick={handleDec} className='border-2 text-gray-900 hover:text-white hover:bg-green-500 rounded-md text-xl hover:border-none p-1 border-gray-400 transition-all ease-linear cursor-pointer' />
                        <span>{qty}</span>
                        <GoPlus onClick={handleInc} className='border-2 text-gray-900 hover:text-white hover:bg-green-500 rounded-md text-xl hover:border-none p-1 border-gray-400 transition-all ease-linear cursor-pointer' />
                            
                          
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Itemcard