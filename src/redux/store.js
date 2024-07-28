import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/cart/CartSlice'
import CategoryReducer from '../features/category/CategorySlice';
import searchReducer from '../features/search/searchSlice';
 const store = configureStore({
  reducer: {
    cart: CartReducer,
    category: CategoryReducer,
    search: searchReducer,
  },
})
export default store;
