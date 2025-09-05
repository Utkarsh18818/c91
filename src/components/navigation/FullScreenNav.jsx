import React from 'react'
import '../../index.css';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavContext';



const FullScreenNav = () => {
    const data = useContext(NavbarContext);
    console.log(data);


    return(
    <div id='fullscreennav' className=' hidden overflow-x-hidden overflow-y-hidden  h-screen absolute w-full '>
        <div style={{ paddingTop: '1.5vh',
            paddingRight:'3vh'
         }} className=" cursor-pointer flex justify-between items-start">
            <div className='text-4xl font-[font2]   h-10 w-30 rounded-2xl flex items-center justify-center select-none' >
            <h1 className='hover:text-[#D3FD50]'>
             C91
           </h1>
            </div>
            <div className='h-15 w-15 relative '>
                <div className="absolute h-20 -rotate-45 origin-top w-1 bg-[#D3FD50]"></div>
                <div className="absolute right-0 h-20  rotate-45 origin-top w-1 bg-[#D3FD50]"></div>
            </div>
        </div>
        <div style={{ paddingTop: '4vh' }} className='h-full px-40 '>
            <div className='h-full'>
            <div className='link relative w-full  '>
            <h1 className='h-[120px] flex items-center justify-center font-[font2]  border-y-1 text-center text-8xl '>WORK</h1> 
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black'> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEE EVERYTHING</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEE EVERYTHING</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEE EVERYTHING</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEE EVERYTHING</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            </div>
            </div> 
            <div className='link relative w-full  '>
            <h1 className='h-[120px] flex items-center justify-center font-[font2] border-t-0 border-y-2 text-center text-8xl '>AGENCY</h1> 
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black'> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>KNOW US</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/vlcsnap-2021-04-21-16h11m49s996.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>KNOW US</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
            </div> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>KNOW US</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/vlcsnap-2021-04-21-16h11m49s996.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>KNOW US</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
            </div>
            </div>
            </div>
            <div className='link relative w-full  '>
            <h1 className='h-[120px] flex items-center justify-center font-[font2] border-t-0 border-y-2 text-center text-8xl '>CONTACT</h1> 
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black'> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEND US A FAX</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEND US A FAX</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEND US A FAX</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>SEND US A FAX</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            </div>
            </div> 
            <div className='link relative w-full  '>
            <h1 className='h-[120px] flex items-center justify-center font-[font2]  border-t-0 border-y-2 text-center text-8xl '>BLOG</h1> 
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black'> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>READ ARTICLES</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>READ ARTICLES</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div> 
            <div className='MoveX flex items-center'>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>READ ARTICLES</h2>
            <img controls='autoplay muted' className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt=""/>
            <h2 className='whitespace-nowrap h-[120px] flex items-center justify-center font-[font2]  text-center text-8xl '>READ ARTICLES</h2>
            <img className='h-32 rounded-full shrink-0 w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
            </div>
            </div> 
            </div>

        </div>
    </div>
    )
}

export default FullScreenNav