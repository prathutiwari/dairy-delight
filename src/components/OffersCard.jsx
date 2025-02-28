import React from 'react'
import offer1 from '../assets/images/offers/1.png'
import offer2 from '../assets/images/offers/2.png'
import offer3 from '../assets/images/offers/3.png'

const OffersCard = () => {
  return (
    <div className='container mt-9'>
      <div className="flex flex-wrap justify-between items-center gap-4 md:gap-3">
        <img src={offer1} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
        <img src={offer2} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
        <img src={offer3} alt='Offer' className='w-full md:w-[32%] rounded-md shadow-lg'/>
      </div>
    </div>
  )
}

export default OffersCard