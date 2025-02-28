import React from 'react'
import client_Desktop from '../assets/images/clients/client_desktop.webp';
import client_mobile from '../assets/images/clients/client_mobile.jpg'
import banner from '../assets/images/clients/banner.jpg'

const Partners = () => {
  return (
    <div className='container mt-10'>
      <h1 className='font-bold text-[25px] md:text-[50px] mb-7 text-center text-black'>Find Us At</h1>
      <img alt='client' src={client_Desktop} className='w-full hidden md:block'/>
      <img alt='client' src={client_mobile} className='w-full md:hidden'/>

      <img alt='Banner' src={banner} className='w-full mt-10 rounded-md'/>
    </div>
  )
}

export default Partners