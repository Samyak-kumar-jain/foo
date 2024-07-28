import React from 'react';
import Foodcard from './Foodcard';
import FoodData from '../Data/fooddata';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Foodlist = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state)=> state.search.search);

  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex flex-wrap gap-4 justify-center mt-10'>
      {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <Foodcard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default Foodlist;
