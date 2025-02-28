import { configureStore } from "@reduxjs/toolkit";
import productCategoryReducer from "./productCategorySlice";
import cartReducer from './cartSlice'

const appStore = configureStore({
     reducer: {
          category: productCategoryReducer,
          cart: cartReducer
     },
});

export default appStore;
