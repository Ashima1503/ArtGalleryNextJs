import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>My Achievements</h1>
      <div className='grid grid-rows-none md:grid-cols-2 p-4 gap-4'>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/DwmQMk2/Whats-App-Image-2023-04-18-at-16-27-44.jpg'
            alt='/'
            layout='responsive'
            width='500'
            height='500'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/WWKQnyP/Whats-App-Image-2023-04-18-at-16-27-43-1.jpg'
            alt='/'
            width='500'
            height='500'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/Fgds3jx/Whats-App-Image-2023-04-18-at-16-27-42.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/6tygm7h/Whats-App-Image-2023-04-18-at-16-27-43-2.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/C6CBhC7/Whats-App-Image-2023-04-18-at-16-27-43.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/1fTddBq/Whats-App-Image-2023-04-18-at-16-18-13.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/SNwT15t/Whats-App-Image-2023-04-18-at-16-18-07.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/mSY8PzK/Whats-App-Image-2023-04-18-at-16-18-10.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/sRmtWd5/Whats-App-Image-2023-04-18-at-16-18-12-2.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://i.ibb.co/NCN685q/Whats-App-Image-2023-04-18-at-16-18-08-2.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
