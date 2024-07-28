import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import FoodData from '../Data/fooddata';
import { setCategory } from '../features/category/CategorySlice';
import {useDispatch, useSelector} from "react-redux"


const Category = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category);

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);
  return (
   <>
   <div className='ml-6 mt-12'>
        <h3 className='text-xl font-semibold'>Find food</h3>


   </div>
   <div className='flex mx-6 my-5 gap-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
   <button onClick={()=>dispatch(setCategory("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
    {categories.map((category,index) =>{
      return <button onClick={()=>dispatch(setCategory(category))} key={index}className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white"}`}>{category}</button>

    })}
    </div>
   
   </>
  )
}

export default Category