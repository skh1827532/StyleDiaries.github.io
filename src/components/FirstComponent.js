import React from 'react'
import QuestionImage from '../AssetsOne/Question.svg'
import HeartImage from '../AssetsOne/Heart.svg'
import SearchImage from '../AssetsOne/Search.svg'
import ImageOne from '../AssetsOne/Image1.svg'
import { useRef } from 'react'
import{Swiper, SwiperSlide} from 'swiper/react'
import leftImage from '../AssetsOne/Left.svg'
import rightImage from '../AssetsOne/Right.svg'


//Importing images for slider

import firstImage from '../FirstCarousel/First.svg'
import secondImage from '../FirstCarousel/Second.svg'
import thirdImage from '../FirstCarousel/Third.svg'

//Importing the swiper stylesheets

import  'swiper/css'

import { Navigation,Pagination,Autoplay} from "swiper" 
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


export default function FirstComponent() {
  const swiperRef = useRef(null)
  return (
  <>
  <div className=" flex flex-col lg:flex-row justify-between firstBackgroundProperty ">
    <div className="firstItem flex flex-row my-8">
     <ul className='flex flex-col my-40'>

       <li className='mx-4 my-6'><img src={QuestionImage} alt="" /></li>
       <li className='mx-4 my-6'><img src={HeartImage} alt="" /></li>
       <li className='mx-4 my-6'><img src={SearchImage} alt="" /></li>
     </ul>
     <img src={ImageOne} className="flex items-center w-[200px] sm:w-[500px] md:w-[600px] mx-auto  h-auto  justify-center lg:w-[747px] lg:h-[598px]" alt="" />


    </div>
    <div className="secondItem flex flex-col my-8">
        
        
      <h1 className='font-bold text-[#2F2649] text-[40px] md:text-[80px] w-auto lg:w-[540px] my-2  mx-4 font-Montserrat'>Key Pieces of
New Season</h1>
    <p className='my-2 text-[22px] mx-4'>New Arrivals</p>
     <div className='lg:mx-8 my-[80px] bg-[#F4EEEC] xs:w-[380px] sm:h-[180px] sm:w-[530px]  w-[310px] md:w-[530px] lg:w-[530px] rounded-[10px] flex items-center mx-auto' onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
     
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      
 >
         
        
        <Swiper 
        className='swiper-box'
        breakpoints={
          {
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 3,
            },
        }
      }
        // className='swiper-container'
        spaceBetween={10}
        modules={[Navigation,Autoplay]}
        
        
         navigation={{
          nextEl:'.next',
          prevEl:  '.prev',
         }}
          
    
        
        
        ref={swiperRef}
        

            // when window width is >= 640px
            
        
        

      
        autoplay={
            {
                delay: 1000,
                disableOnInteraction: false,
            }} 
            slidesPerView={3}
            centeredSlides
            
            loop={true}
          
        >



            <SwiperSlide>
               
                <img src={firstImage} alt="" className="w-[130px] h-[120px] rounded-[8px]  " />
                

               
                    

              

            </SwiperSlide>
            <SwiperSlide >
                

           
            <img src={secondImage} alt=""  className="w-[130px] h-[120px] rounded-[8px]  " />
           
            </SwiperSlide>
            <SwiperSlide >
              
               
            <img src={thirdImage} alt=""  className="w-[130px] h-[120px]  rounded-[8px] " />
            
               
            </SwiperSlide>
       
            
           

        </Swiper>
        <div className='flex flex-col'>

        <div className="prev my-2 mx-3" ><img src={rightImage} alt="" /></div>
    <div className="next mx-3" ><img src={leftImage} alt="" /></div>
        </div>
        </div>

    

    </div>
  </div>
  
  </>
  )
}
