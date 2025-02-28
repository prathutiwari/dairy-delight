import dairyProducts from '../utils/productData';


const useProductData = (productId) => {
     const newId = parseInt(productId) - 1;
     const getProductData = dairyProducts[newId];
     return getProductData
}

export default useProductData