import React from 'react';
import HomeheroText from '../components/home/HomeheroText';
import Video from '../components/home/Video';
import HomeBottomText from '../components/home/HomeBottomText';
const Home = () => {
  return (
    <div>
      <div className= 'w-screen h-screen fixed' >
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeheroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;