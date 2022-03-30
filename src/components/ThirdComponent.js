import React from 'react'
import { useRef } from 'react'
import Firstsvg from '../AssetsThree/First.svg'
import Secondsvg from '../AssetsThree/Second.svg'
import Thirdsvg from '../AssetsThree/Third.svg'
import Fourthsvg from '../AssetsThree/Fourth.svg'
import LeftArrow from '../AssetsThree/LeftArrow.svg'
import RightArrow from '../AssetsThree/RightArrow.svg'
import ArrowImage from '../AssetsThree/Arrow.svg'

// import Card from '../ui/Card'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

export default function ThirdComponent() {
  const swiperRef = useRef(null)
  return (
   <>
   <div className="container flex flex-col mx-auto justify-center items-center">
     <h1 className='font-bold mx-auto text-[26px] sm:text-[40px] my-2 text-center'>Trending Products</h1>
     <p className='my-1 sm:w-[560px] mx-auto text-center w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero 
et velit interdum, ac aliquet odio mattis.</p>

  {/* Start of Carousel container  */}
  <div onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      
 className="mt-[10rem] mb-12  flex items-center w-[300px] xs-[380px] sm:w-fit md:w-[740px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1350px]">
   {/* <div className="prev "><img src={LeftArrow} alt="" /></div> */}
     

        <div className='goToPrev mx-4'><img src={LeftArrow} alt="" /></div>
        <Swiper 
        className='swiper-container'
       
        // spaceBetween={0.1}
        modules={[Navigation,Autoplay]}
        
        
        
            navigation={

            {              
              prevEl: ".goToNext",
             
              nextEl: ".goToPrev",
            }
        }
    
        
        
        ref={swiperRef}
        breakpoints={{

            // when window width is >= 640px
            320:{
                width:320,
                slidesPerView:1,
            },
            400: {
              width: 400,
              slidesPerView: 1,

            },
            640: {
              width: 640,
              slidesPerView: 2,

            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1150: {
                width: 1150,
                slidesPerView: 4
            }
          }}
        
        

      
        autoplay={
            {
                delay: 1000,
                disableOnInteraction: false,
            }} 
            slidesPerView={4}
            centeredSlides={false}
            
            loop={true}
          
        >


            <SwiperSlide className=''>
            <div className="hover:cursor-pointer rounded-[8px] opacity-80 container  flex flex-col w-[266px] h-[340px] items-center justify-center bg-[#F4EEEC] ">

              
          

           
<img src={Firstsvg} alt=""  className="w-[231px] h-[196px]   " />
<div className="container flex items-center justify-between w-[230px] h-[80px] bg-[#F4EEEC] rounded-[8px] boxShadow">
 <div className="anotherCont flex flex-col mx-2">
   <p className='mx-2 text-[16px] mt-2'>Sports Wear</p>
   <h1 className='mx-2 my-2 text-[16px] font-bold'>$32.43</h1>
 </div>
   <img src={ArrowImage} alt="" className='mx-4'/>
</div>

        
</div> 
                    

                {/* background: linear-gradient(134.49deg, #BEA9ED 2.8%, #BCD4FA 92.19%);
border-radius: 12px; */}

            </SwiperSlide>
            <SwiperSlide >
                <div className="hover:cursor-pointer rounded-[8px] opacity-80 container  flex flex-col w-[266px] h-[340px] items-center justify-center bg-[#F4EEEC]">

              
          

           
                <img src={Secondsvg} alt=""  className="w-[180px] h-[228px]   " />
                <div className="container flex items-center justify-between w-[230px] h-[80px] bg-[#F4EEEC] rounded-[8px] boxShadow">
                 <div className="anotherCont flex flex-col mx-2">
                   <p className='mx-2 text-[16px] mt-2'>Sports Wear</p>
                   <h1 className='mx-2 my-2 text-[16px] font-bold'>$32.43</h1>
                 </div>
                   <img src={ArrowImage} alt="" className='mx-4'/>
                </div>
           
                        
            </div>  
            </SwiperSlide>
            <SwiperSlide >
            <div className="hover:cursor-pointer rounded-[8px] opacity-80 container  flex flex-col w-[266px] h-[340px] items-center justify-center bg-[#F4EEEC]">

              
          

           
<img src={Thirdsvg} alt=""  className="w-[244px] h-[196px]   " />
<div className="container boxShadow flex items-center justify-between w-[230px] h-[80px] bg-[#F4EEEC] rounded-[8px]">
 <div className="anotherCont flex flex-col mx-2">
   <p className='mx-2 text-[16px] mt-2'>Sports Wear</p>
   <h1 className='mx-2 my-2 text-[16px] font-bold'>$32.43</h1>
 </div>
   <img src={ArrowImage} alt="" className='mx-4'/>
</div>

        
</div>  
                </SwiperSlide>
            <SwiperSlide >
            <div className="hover:cursor-pointer rounded-[8px] opacity-80 container  flex flex-col w-[266px] h-[340px] items-center justify-center bg-[#F4EEEC]">

              
          

           
<img src={Fourthsvg} alt=""  className="w-[222px] h-[212px]   " />
<div className="container boxShadow flex items-center justify-between w-[230px] h-[80px] bg-[#F4EEEC] rounded-[8px]">
 <div className="anotherCont flex flex-col mx-2">
   <p className='mx-2 text-[16px] mt-2'>Sports Wear</p>
   <h1 className='mx-2 my-2 text-[16px] font-bold'>$32.43</h1>
 </div>
   <img src={ArrowImage} alt="" className='mx-4'/>
</div>

        
</div> 
            </SwiperSlide>
            <SwiperSlide >
            <div className="rounded-[8px] opacity-80 container  flex flex-col w-[266px] h-[340px] items-center justify-center bg-[#F4EEEC]">

              
          

           
<img src={Thirdsvg} alt=""  className="w-[244px] h-[196px]   " />
<div className="container boxShadow flex items-center justify-between w-[230px] h-[80px] bg-[#F4EEEC] rounded-[8px]">
 <div className="anotherCont flex flex-col mx-2">
   <p className='mx-2 text-[16px] mt-2'>Sports Wear</p>
   <h1 className='mx-2 my-2 text-[16px] font-bold'>$32.43</h1>
 </div>
   <img src={ArrowImage} alt="" className='mx-4'/>
</div>

        
</div> 
            </SwiperSlide>
           
        </Swiper>
        <div className='goToNext mx-4'><img src={RightArrow} alt="" /></div>
        {/* <div className='next'><img src={RightArrow} alt="" /></div> */}
        </div>

        <button className='mx-auto text-center my-2 font-bold text-[20px] w-[244px] h-[66px] bg-[#F4EEEC] rounded-[8px] 
        text-[#5B6E9D] hover:text-[#F4EEEC] hover:bg-[#5B6E9D]'>Shop Now</button>


   </div>
   </>
  )
}
