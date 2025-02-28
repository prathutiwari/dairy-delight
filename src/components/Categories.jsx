import React from 'react'
import dairyCategories from '../utils/categoryData';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/productCategorySlice';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const setYourCategory = (categ) => {
      dispatch(setCategory(categ));
      navigate('/products')
  }

  return (
    <div className='container mt-10'>
      <h1 className='font-bold text-[25px] md:text-[50px] mb-7 text-center text-black'>All Farm Fresh Products At One Place</h1>

      <div className='flex flex-wrap justify-center gap-5 md:gap-10'>
        {
          dairyCategories.map((category) => {
            return (
              <div className='w-[150px] h-[150px] text-center rounded-full shadow-md border border-gray-600 p-4 cursor-pointer' key={category.id} onClick={()=> setYourCategory(category.name)}>
                <img src={category.image} alt={category.name} className='w-[60px] mx-auto'/>
                <h2 className='text-[18px] font-semibold'>{category.name}</h2>
              </div>
            )
          })
        }
      </div>




    </div>
  )
}

export default Categories