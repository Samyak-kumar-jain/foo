import React from 'react'
import { IoMdClose } from "react-icons/io"
import Itemcard from './Itemcard'
import { toggleCart } from '../features/cart/CartSlice';
import { Link } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux'




const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart)
    const activeCart = useSelector((state) => state.cart.activeCart);
    const dispatch = useDispatch(); // Assuming you have this in your state
    const handleClose = () => {
        dispatch(toggleCart()); // Dispatch toggleCart to hide/show the cart
    };

    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)





    return (
        <>
            <div className={`fixed right-0 top-0 lg:w-[20vw] w-full bg-white h-full p-5 transition-transform duration-500 ease-in-out ${activeCart ? "translate-y-0" : "translate-y-full"
                }`}>
                <div className='flex justify-between items-center'>
                    <span className='text-xl text-gray-800 font-bold'>My Order</span>
                    <IoMdClose
                        onClick={handleClose}
                        className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'></IoMdClose>
                </div>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((food) => (
                            <Itemcard
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                desc={food.desc}      // Ensure `desc` is used in `Itemcard`
                                rating={food.rating}  // Ensure `rating` is used in `Itemcard`
                                img={food.img}
                                qty={food.qty}
                            />
                        ))
                    ) : (
                        <h2 className='flex justify-center items-center text-center text-gray-200 text-xl w-full mt-48 border-gray-200 border-2 rounded-lg'>
                            Your cart is empty
                        </h2>
                    )
                }



                <div className='absolute bottom-0'>
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount : ₹{totalPrice}</h3>
                    <hr className='w-[90vw] lg:[18vw] my-2' />
                    <Link to="/success">
                        <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] hover:bg-green-600 mb-5'>
                            Checkout
                        </button>
                    </Link>                
                    </div>


            </div>



        </>
    )
}

export default Cart