import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItems } from '../utils/cartSlice';

const ProductCard = ({ info }) => {

     const dispatch = useDispatch();

     const handleAddToCart = (addProduct) => {
          dispatch(addItems(addProduct));
     }

     return (

          <div className="max-w-sm bg-[#f2f4f7] border border-gray-300 rounded-md shadow-lg px-5 py-6 flex flex-col items-center cursor-pointer">
               <Link to={'/product/' + info.category + "/" + info.id}>
                    <img
                         src={info.image}
                         alt="Farm Fresh Homogenised Cow Milk"
                         className="w-24 h-24 mb-4"
                    />

                    <h3 className="text-gray-700 text-center text-[18px] font-medium mb-4">
                         {info.name}
                    </h3>

                    <p className="mb-4 text-[14px]">
                         <span className="line-through mr-2 text-gray-400">₹{Math.round(info.price * 10) + Math.round(Math.random() * 10)}</span>
                         <span className="font-medium text-gray-600">₹{Math.round(info.price * 10)}/{info.size}</span>
                    </p>
               </Link>

               <div className="flex justify-between w-full items-center">
                    <p className="text-green-600 text-[18px] font-medium">{info.availability}</p>
                    <button
                         type="button"
                         className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 hover:bg-green-200 text-green-600"
                         onClick={() => handleAddToCart(info)}
                    >
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4"
                         >
                              <path 
                                   strokeLinecap="round" 
                                   strokeLinejoin="round" 
                                   strokeWidth="2" 
                                   d="M12 4v16m8-8H4" />
                         </svg>

                    </button>
               </div>
          </div>

     )
}

export default ProductCard