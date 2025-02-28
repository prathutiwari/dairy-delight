import React from 'react'

const Checkout = () => {
     return (
          <div className='container mt-10'>
               <div className="w-full lg:w-3/4 mx-auto px-5 py-5 bg-white rounded-md border border-gray-300 shadow-lg">
                    <div className='mb-4'>
                         <h2 className="text-[22px] font-medium mb-2">Your Name</h2>
                         <input
                              type="text"
                              className="border p-2 rounded-md w-full"
                         />
                    </div>
                    <div className='mb-4'>
                         <h2 className="text-[22px] font-medium mb-2">Mobile Number</h2>
                         <input
                              type="number"
                              className="border p-2 rounded-md w-full"
                         />
                    </div>
                    <div className='mb-4'>
                         <h2 className="text-[22px] font-medium mb-2">Address Details</h2>
                         <input
                              type="text"
                              className="border p-2 rounded-md w-full"
                         />
                    </div>
                    <div className='mb-4'>
                         <h2 className="text-[22px] font-medium mb-2">PinCode</h2>
                         <input
                              type="number"
                              className="border p-2 rounded-md w-full"
                         />
                    </div>

                    <div>
                         <h2 className="text-[22px] font-medium mb-2">Delivery Date</h2>
                         <input
                              type="date"
                              className="border p-2 rounded-md w-full"
                         />
                    </div>
                    <hr className="my-4" />

                    <div>
                         <h2 className="text-[22px] font-medium mb-2">Payment Details</h2>
                         <p className="flex justify-between">
                              <span>Items Total</span> <span>₹37</span>
                         </p>
                         <p className="flex justify-between">
                              <span>Delivery Fee</span> <span>₹0</span>
                         </p>
                         <p className="flex justify-between font-bold">
                              <span>Total Amount</span> <span>₹37</span>
                         </p>
                    </div>
                    <div className="w-full md:w-1/2 mx-auto text-center mt-5">
                         <button className="bg-green-600 text-white py-2 px-5 rounded-md">
                              Procced To Payment
                         </button>
                    </div>
                    
               </div>

          </div>

     )
}

export default Checkout