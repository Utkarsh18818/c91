import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-2'>
      <div>
        
      </div>
      <Link to='/projects' className='w-[100px] hover:border-[#D3FD50] hover:text-[#D3FD50] text-center font-[8.5vw] border-2 leading-[3vw] mb-3 border-white uppercase rounded-full '>Projects</Link>
      <Link to='/agence'className='w-[100px] hover:border-[#D3FD50] hover:text-[#D3FD50] text-center font-[8.5vw] border-2 leading-[3vw] mb-3border-white uppercase rounded-full '>Agence</Link>
      </div>
  )
}

export default HomeBottomText