import React from 'react'
import Navbar from '../components/Navbar'
import Postdetails from '../components/Postdetails'

const Posts = () => {
  return (
    <div className='flex'>
         <Navbar/>

         <div className='w-full'>

         <Postdetails/>
         </div>

    </div>
  )
}

export default Posts