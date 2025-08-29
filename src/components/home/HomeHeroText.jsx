import React from 'react'
import '../../index.css'
import Video from './Video'
const HomeheroText = () => {
  return (
    <div  className='pt-5 font-[font1] text-center'>
      <div className='text-[9.5vw] justify-center flex items-center upppercase leading-[8vw]'>
        The spark for
        </div>
      <div className='text-[9.5vw] justify-center flex items-start upppercase leading-[8vw]'>
         All
        <div className='h-[10vw] w-[24vw] rounded-full -mt-5 overflow-hidden'>
        <Video/>
        </div>
        things
        </div>
      <div className='text-[9.5vw] upppercase leading-[8vw]'>creative</div>
    </div>
  )
}

export default HomeheroText