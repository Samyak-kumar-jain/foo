import React from 'react'
import Header from '../Components/Header'
import Category from '../Components/Category'
import Foodlist from '../Components/Foodlist'
import Cart from '../Components/Cart'

const Home = () => {
  return (
   <>
   <Header/>
   <Category/>
   <Foodlist/>
   <Cart/>
   </>
  )
}

export default Home