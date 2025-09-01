import React, { use } from 'react'
import { useRef } from 'react';
import { TbMenuDeep } from "react-icons/tb";
const Navbar = () => {
  const navGreenRef = useRef(null);

  return (
    <div className='fixed top-0 flex justify-between items-start w-full z-4'>
      <div className='text-4xl font-[font2]  h-10 w-30 rounded-2xl flex items-center justify-center select-none' >
      <h1 className='hover:text-[#D3FD50]'>
        C91
      </h1>
      </div>
      <div onMouseEnter={()=>{
        navGreenRef.current.style.height = '100%';
      }} 
      onMouseLeave={()=>{
        navGreenRef.current.style.height = '0%';
      }}
      className=' bg-black rounded-2xl h-11 relative w-[15vw]'>
        <div className='w-full flex justify-end pr-3 h-full text-4xl'>
          <TbMenuDeep />
        </div>
      <div className='relative'>
      </div>
      <div ref={navGreenRef} className='bg-[#D3FD50] h-0 w-full transition-all rounded-2xl absolute top-0'>
        <div className='w-full flex hover:text-black justify-end pr-3 h-full text-4xl cursor-pointer'>
          <TbMenuDeep />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar