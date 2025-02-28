import React from "react";
import ProductCard from "./ProductCard";
import dairyProducts from "../utils/productData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/productCategorySlice";
import dairyCategories from "../utils/categoryData";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((store) => store.category);
  const filteredList = selectedCategory === 'All' ? dairyProducts : dairyProducts.filter((product) => product.category === selectedCategory);

  const setYourCategory = (category) => {
    dispatch(setCategory(category));
  }

  return (
    <div className="container mt-10 mb-10">
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <div className={selectedCategory === 'All' ? "flex items-center justify-center px-3 shadow-md border border-gray-300 py-[8px] rounded-md cursor-pointer bg-green-600 text-white" : "flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[8px] rounded-md cursor-pointer"} onClick={() => setYourCategory('All')}>
            All
          </div>
        </div>
        {
          dairyCategories.map((category) => {
            return (
              <div className="lg:col-span-1" key={category.id}>
                <div className={selectedCategory === category.name ? "flex items-center justify-center px-3 shadow-md border border-gray-300 py-[8px] rounded-md cursor-pointer bg-green-600 text-white" : "flex items-center justify-center px-3 shadow-md border border-gray-300 py-[8px] rounded-md cursor-pointer"} onClick={() => setYourCategory(category.name)}>
                  {category.name}
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="mt-10">
        {
          dairyCategories.map((category) => {
            return (
               selectedCategory === category.name && 
                <p className="text-center mb-4 ">
                  {category.description}
                </p>
            )
          })
        }
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredList.map((product) => {
            return (
              <div className="lg:col-span-1" key={product.id}>
                <ProductCard info={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
