import React, { useContext } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import {EffectFade, Autoplay} from 'swiper';
import Img1 from '../assets/img/heroSlider/banner1.jpg';
import Img2 from '../assets/img/heroSlider/banner2.jpg';

import { RoomContext } from '../context/RoomContext';


const slides = [
  
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
    btnText: 'Book our Rooms'
  },
  {
    title: 'Discover Your Perfect Stay',
    bg: Img1,
    btnText: 'Book our Rooms'
  }
]



const HeroSlider = () => {
  const {handleScroll} = useContext(RoomContext);


  
   return (
    <Swiper   modules={[EffectFade, Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
    }}
     className='heroSlider   lg:h-[860px]   h-[640px] xl:h-[840px]   bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20" '>
      {slides.map((slide, index)=>{
        const {title, bg, btnText} = slide;
        return <SwiperSlide className='  h-full  relative justify-center xl:justify-start items-center flex'
        key={index}
        >
        <div className='   z-20 text-white container  mx-auto h-full flex items-center justify-center xl:justify-start'>
        <div className="  hero__text  w-[600px] flex flex-col items-center text-center xl:text-left lg:items-start">
                   
                   
                    <h1 className="lg:text-7xl text-6xl mb-8">{title}</h1>
                    <p className="mb-8 text-primary">
                        There are many variations of the passages of lorem Ipsum from available,variations of the
                        passages.
                    </p>
                  
                    <button class="bg-primary hover:bg-primary text-white font-bold py-4 px-8 rounded">
                    {btnText} <i className="ri-arrow-right-line text-accent"></i>
</button>
                </div>
       
        </div>
       
        <div className='absolute top-0 w-full h-full'>
          <img src={bg} alt="" className='object-cover h-full w-full'/>
        </div>
        <div className='absolute w-full h-full bg-white/40 '></div>
        </SwiperSlide>
      })}
    </Swiper>
    )
};

export default HeroSlider;
