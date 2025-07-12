import React from 'react'
import desserts from '../assets/desserts.png'

const Gallary = () => {
  return (
    <div className='gap-20 flex mt-10 px-40 py-40'>
    <div className='h-100 w-100 rounded-3xl flex flex-wrap justify-center items-center px-15 py-15 bg-amber-400  hover:bg-yellow-600 transition duration-500'>
        <img src={desserts} alt="" />
         </div> 
         
         <div className='h-100 w-100 rounded-3xl flex flex-wrap justify-center items-center px-15 py-15 bg-amber-400  hover:bg-yellow-600 transition duration-500'>
        <img src={desserts} alt="" />
         </div> 
         
         <div className='h-100 w-100 rounded-3xl flex flex-wrap justify-center items-center px-15 py-15 bg-amber-400  hover:bg-yellow-600  transition duration-500'>
        <img src={desserts} alt="" />
         </div> 
         
         
    </div>
  )
}

export default Gallary
