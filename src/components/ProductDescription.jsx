import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import useProductData from '../hooks/useProductData';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ProductDescription = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[3];
  const productData = useProductData(productId);

  const dispatch = useDispatch();

  const handleAddToCart = (addProduct) => {
    dispatch(addItems(addProduct));
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-sm text-gray-500 mb-4 flex">
        <Link to='/'><div className="hover:underline">Home</div></Link> /
        <Link to='/products'><div className="hover:underline">Products</div></Link> /
        <span>{productData.name}</span>
      </div>


      <div className="block md:flex gap-8 ">
        <div className="flex-shrink-0">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-80 h-80 object-contain mb-4"
          />
          <div className="flex space-x-2">
            {productData.additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="w-16 h-16 border p-2 border-gray-200 rounded"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-around">
          <div>

            <p className='text[15px]'>{productData.brand} / {productData.category}</p>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {productData.name}
            </h1>

            <p className="text-lg text-gray-500 mb-2">
              <span className="line-through text-gray-400">₹{Math.round(productData.price * 10) + Math.round(Math.random() * 10)}</span>
              <span className="ml-2 font-medium text-gray-700">₹{Math.round(productData.price * 10)}/{productData.size}</span>
            </p>

            <p className='text[15px] font-normal text-red-500 mb-3'>Best before {productData.expiration_date}</p>

            <p className='text[15px] font-normal mb-3'>{productData.description}</p>

            <div className='flex items-center text-[20px] mb-3'>
              <p className="text-green-600 font-medium mr-2">
                {productData.availability}
              </p> /
              <p className="text-sm text-green-600 ml-2">
                {productData.deliveryMessage}
              </p>
            </div>

            <h2 className='text-[20px] font-medium mt-5'>Nutrition Info</h2>
            <div className='flex items-center flex-wrap'>
              <p className='text[13px] font-normal mr-2'>Calories: {productData.nutrition_info.calories}gm</p> |
              <p className='text[13px] font-normal mx-2'>Protein: {productData.nutrition_info.protein}</p> |
              <p className='text[13px] font-normal mx-2'>Fat: {productData.nutrition_info.fat}</p> |
              <p className='text[13px] font-normal mx-2'>Cabrohyrates: {productData.nutrition_info.carbohydrates}</p> |
              <p className='text[13px] font-normal mr-2'>Sugar: {productData.nutrition_info.sugar}</p> |
              <p className='text[13px] font-normal mx-2'>Calcium: {productData.nutrition_info.calcium}</p> |
              <p className='text[13px] font-normal ml-2'>Vitamin D: {productData.nutrition_info.vitamin_d}</p>
            </div>


          </div>

          <button
            type="button"
            className="w-1/2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => handleAddToCart(productData)}
          >
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDescription