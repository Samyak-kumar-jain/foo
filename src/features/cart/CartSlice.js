import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    cart:[],
    activeCart:false,
}

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                // Update the quantity of the existing item
                state.cart = state.cart.map(item =>
                    item.id === newItem.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // Add new item with quantity 1
                state.cart.push(newItem);
            }
        },
        removeFromCart: (state, action) => {
            // Assuming action.payload is just the id
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        toggleCart: (state) => {
            state.activeCart = !state.activeCart;

    },
    incrementQty: (state, action) => {
        state.cart = state.cart.map(item =>
            item.id === action.payload
                ? { ...item, qty: item.qty + 1 }
                : item
        );
    },
    decrementQty: (state, action) => {
        state.cart = state.cart.map(item =>
            item.id === action.payload
                ? { ...item, qty: item.qty - 1}
                : item
        );
    },
},

    
})
export const { addToCart,removeFromCart,toggleCart,incrementQty,decrementQty} = CartSlice.actions;
export default CartSlice.reducer;