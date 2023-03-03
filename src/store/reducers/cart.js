import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!isItemInCart) {
        state.items.push(action.payload);
      } else {
        isItemInCart.count++;
      }
      state.totalPrice = state.items.reduce((sum,item)=>{
        return (item.price * item.count) + sum;
      },0)
    },

    itemMinus: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        --findItem.count;
      }
      state.totalPrice = state.items.reduce((sum,item)=>{
        return (item.price * item.count) + sum;
      },0)
    },

    itemPlus: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        ++findItem.count;
      }
      state.totalPrice = state.items.reduce((sum,item)=>{
        return (item.price * item.count) + sum;
      },0)
    },

    deleteFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((sum,item)=>{
        return (item.price * item.count) + sum;
      },0)
    },

    
  },
});

export default Cart.reducer;
export const { addToCart, itemMinus, itemPlus, deleteFromCart } = Cart.actions;
