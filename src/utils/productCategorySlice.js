import { createSlice } from "@reduxjs/toolkit";

const productCategorySlice = createSlice(
     {
          name:'category',
          initialState:{
               selectedCategory: 'All',
          },
          reducers: {
               setCategory: (state, action) => {
                    state.selectedCategory = action.payload;
               }
          }
     }
)

export const { setCategory } = productCategorySlice.actions;

export default productCategorySlice.reducer;