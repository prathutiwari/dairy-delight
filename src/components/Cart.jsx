import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, emptyCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const addedProduct = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const hanldeRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  }
  const emptyYourCart = () => {
    dispatch(emptyCart())
  }

  return (
    <div className="container mt-10">
      {
        addedProduct.length === 0 ? 
        (
          <div className="w-full md:w-1/2 text-center mx-auto md:h-[40vh]">
            <p className="mb-8">Your Cart Is Empty. Please Add SOme Products to Proceed!</p>
            <Link to='/products'
              className="mt-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Go To Products
            </Link>
          </div>
        )  :(
              <div className="w-full lg:w-3/4 mx-auto p-4 bg-white mb-4">
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-bold">Items ({addedProduct.length})</h2>
                  <button className="bg-red-500 text-white px-3 py-1 lg:px-5 lg:py-2 rounded-lg" onClick={() => emptyYourCart()}>
                    Empty Cart
                  </button>
                </div>
                  
                {
                  addedProduct.map((item) => {
                      return (
                        <div className="flex items-center flex-col lg:flex-row px-5 py-3 border border-gray-300 rounded-md mb-2" key={item.id}>
                          <img
                            src={item.image}
                            alt="Product"
                            className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-md mr-8"
                          />
                          <div className="flex-1 mb-2">
                            <p className="text-[18px] lg:text-[20px] font-medium">{item.name}</p>
                            <p className="text-[14px] lg:text-[16x] mb-1">₹{Math.round(item.price * 10)}/{item.size}</p>
                            <p className="text-[14px] lg:text-[16px] mb-1">Amount: ₹{Math.round(item.price * 10)}</p>
                          </div>
                          <button className="bg-red-500 text-white px-3 py-1 lg:px-5 lg:py-2 rounded-lg" onClick={() => hanldeRemoveItem(item.id)}>
                            Remove
                          </button>
                        </div>
                      )
                  })
                }
                <div className="w-full lg:w-1/3 mx-auto mt-7">
                  <Link to='/checkout' className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Proceed To Address
                  </Link>
                </div>
              </div>
            )
      }
    </div>
  );
};

export default Cart;
