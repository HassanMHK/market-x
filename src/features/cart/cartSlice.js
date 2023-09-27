import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const {id, img, name, price} = action.payload;
        const found = state.cartItems.find((item) => {
            return item.id === id;
        })
        if(!found){
            state.cartItems.push({id: id, img: img, name: name, price: price, amount: 1});
            state.amount = state.amount + 1;
        }
    },
    clearCart: (state) =>{
        state.cartItems = [];
        state.amount = 0;
    },
    removeItem: (state, action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => {
            return itemId !== item.id
        });
        state.amount = state.amount - 1;
    },
    increase: (state, action) => {
        const itemId = action.payload.id;
        const cartItem = state.cartItems.find((item) => itemId === item.id);
        cartItem.amount = cartItem.amount + 1;

    },
    decrease: (state, {payload}) => {
        const cartItem = state.cartItems.find((item) => {
            return payload.id === item.id;
        });
        cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
        state.total = 0;
        state.cartItems.forEach((item) => {
            state.total = state.total + item.price * item.amount;
        });
    }
  }
})

// console.log(cartSlice);
export const { addToCart, clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer