import React from 'react'
import AssetFourImage1 from '../TestimonilsAssets/First.svg'
import AssetFourImage2 from '../TestimonilsAssets/Second.svg'

export default function Fifthcomponent() {
  return (
  <>
   <div className=" flex flex-col items-center justify-center  mx-auto mb-9">

<h1 className='font-bold text-[40px] my-10'>Testimonials</h1>
<div className=" flex flex-col lg:flex-row gap-[2rem] mx-auto">
    <div className="firstPart boxShadow rounded-[20px] justify-center  w-[280px] h-auto flex flex-col mx-auto bg-white sm:w-[372px] sm:h-[289px] my-[20px]">
    <div className="item1 my-10 flex mx-[20px] ">
        <img src={AssetFourImage1} alt="" />
               <div className="second mx-8 justify-center items-center">
                   
                  <p className='font-bold text-[20px]'>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>  

                   
                   
               </div>
               <img src={AssetFourImage2} className="mx-8" alt="" />
               
           </div>
           <p className='my-8 mx-[20px]  w-[250px] sm:sw-[300px] h-[96px]'>Leave Zoom links behind. Move 
from room to room in one click, 
and keep track of open rooms 
in the room list.</p>


    </div>
    <div className="secondPart boxShadow rounded-[20px] justify-center w-[280px] h-auto flex flex-col mx-auto bg-white sm:w-[372px] sm:h-[289px] my-[20px]">
    <div className="item1 my-10 flex mx-[20px]">
        <img src={AssetFourImage1} alt="" />
               <div className="second mx-8 justify-center items-center">
                   
                  <p className='font-bold text-[20px]'>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>  

                   
                   
               </div>
               <img src={AssetFourImage2} className="mx-8" alt="" />
               
           </div>
           <p className='my-8 mx-[20px] w-[250px]  sm:w-[300px] h-[96px]'>Leave Zoom links behind. Move 
from room to room in one click, 
and keep track of open rooms 
in the room list.</p>


    </div>
    <div className="thirdPart boxShadow rounded-[20px] justify-center w-[280px] h-auto flex flex-col mx-auto bg-white  sm:w-[372px] sm:h-[289px] my-[20px]">
    <div className="item1 my-10 flex mx-[20px]">
        <img src={AssetFourImage1} alt="" />
               <div className="second mx-8 justify-center items-center">
                   
                  <p className='font-bold text-[20px]'>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>  

                   
                   
               </div>
               <img src={AssetFourImage2} className="mx-8" alt="" />
               
           </div>
           <p className='my-8 mx-[20px] w-[250px] sm:w-[300px] h-[96px]'>Leave Zoom links behind. Move 
from room to room in one click, 
and keep track of open rooms 
in the room list.</p>


    </div>
</div>
</div>
</>
  )
}
