import { configureStore } from "@reduxjs/toolkit";

import Cart from "./reducers/cart";


const store = configureStore({
  reducer: {
    Cart: Cart,
  },
});

export default store;