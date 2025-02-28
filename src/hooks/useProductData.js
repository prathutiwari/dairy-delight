import React from 'react'
import dairyProducts from '../utils/productData';


const useProductData = (productId) => {
     const newId = parseInt(productId) - 1;
     console.log(newId)
     const getProductData = dairyProducts[newId];
     return getProductData
}

export default useProductData