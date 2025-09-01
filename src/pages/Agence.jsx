import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ]
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
useGSAP(() => {
    gsap.to(imageDivRef.current, {
      y: 100, // Add some movement
      duration: 1,
      scrollTrigger: {  // Note: lowercase 's' in scrollTrigger
        trigger: imageDivRef.current,
        start: "top 5%",
        end: "top -75%",
        pin: true,
        scrub: true,
        toggleActions: "play none none reverse",
        onUpdate:(e)=>{
          let imageIndex;
          if(e.progress < 1){
            imageIndex = Math.floor(e.progress * imageArray.length);
          }
           else{
            imageIndex = imageArray.length - 1;
           }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })
  return (
    <div>
    <div className="relative section1 py-1">
      <div ref={imageDivRef} className='h-[25vw] w-[20vw] rounded-2xl absolute top-[7vw] left-[30vw] z-10 overflow-hidden'>
        <img ref={imageRef}
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" 
          alt="Team member" 
          className="w-full h-full object-cover select-none"
        />
      </div>
      <div className='font-[font1] min-h-screen relative'>
        <div className='absolute top-1/2 w-full z-15'>
          <h1 className='text-[19vw] text-center uppercase leading-[15vw] select-none'>
            Soixan7e <br/>
            Douze
          </h1>
          <div className='mt-8 w-full flex justify-end pr-8'>
            <p className='text-3xl w-1/2 text-right leading-snug select-none'>
              We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="section2 h-[200vh]">

    </div>
    </div>
  )
}

export default Agence