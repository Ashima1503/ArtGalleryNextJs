import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-light/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold' style={{ marginTop:'40px', fontSize: '50px', color: 'black'}}>{heading}</h2>
        <p className='py-5 text-xl' style={{ fontSize: '25px' , color: 'black'}}>{message}</p>
      </div>
    </div>
  );
};

export default Hero;
