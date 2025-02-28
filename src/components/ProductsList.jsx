import React from 'react'
import ProductCard from './ProductCard'
import dairyProducts from '../utils/productData'

const ProductsList = () => {
  return (
    <div className='container mt-10 mb-10'>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            All
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            Milk
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            Curd
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            Ghee
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            Paneer
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center px-3 shadow-lg border border-gray-300 py-[5px] rounded-md">
            ButterMilk
          </div>
        </div>
       </div>

       <div className='mt-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {
            dairyProducts.map((product) => {
              return (
                <div className="lg:col-span-1" key={product.id}>
                  <ProductCard info={product}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsList