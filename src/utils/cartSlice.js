import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name: 'cart',
     initialState: {
          items: []
     },
     reducers: {
          addItems: (state, action) => {
               state.items.push(action.payload);
          },
          removeItem: (state, action) => {
               // state.items.pop();
               state.items = state.items.filter(item => item.id !== action.payload.id);
          },
          emptyCart: (state) => {
               state.items.length = 0;
          }
     }
});


export const { addItems, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;