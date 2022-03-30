import React from 'react'
import AssetsFourImage1 from '../AssetsFour/First.svg'
import AssetsFourImage2 from '../AssetsFour/Second.svg'
import AssetsFourImage3 from '../AssetsFour/Third.svg'
import backgroundImage from '../AssetsFour/Background.svg'
import RightSvg from '../AssetsFour/Right.svg'

export default function FourthComponent() {
  return (
    <>
   <div className=" flex flex-col  lg:flex-row my-10 items-center justify-center">
     <div className="firstItem    sm:w-[610px] sm:h-[610px] w-[300px] my-3 h-auto mx-12 bg-[#F4EEEC] hover:cursor-pointer">
       <div className="innerCont top-0 my-8 mx-8  relative flex">
       <h1 className='font-bold text-[26px] sm:text-[50px] relative left-24 top-14 lg:left-16 z-10'>BIG SALE</h1> 
       <img src={backgroundImage} alt="" className='absolute top-0 flex ' />
       </div>

       <img src={AssetsFourImage1} alt="" className='w-[250px] sm:w-auto mx-auto my-[10rem]'  />


       
      
 </div>

     <div className="secondItem flex flex-col my-3">

       <div className="firstElem my-4 flex flex-col lg:flex-row items-center bg-[rgb(244,238,236)] sm:w-[610px] lg:h-[292px] hover:cursor-pointer ">
         <div>
        
         <p className='text-[50px] my-1 mx-4'>BIG SALE</p>
           
       <h1 className='text-[50px] my-1 font-bold text-[#7287BB] mx-4'>NEW ITEM</h1> 
      <div className="inner my-2 mx-4 flex flex-row hover:underline-offset-4 hover:underline">
        <img src={RightSvg} alt="" className='mx-1' />
        <p className='text-[16px] mx-4'>Shop Now</p>



      </div>
      </div>
      <div className="image lg:-mt-[100px]">
        
      <img src={AssetsFourImage2} alt="" className='w-[283px] h-[363px] ' />
      </div>
       </div>
       <div className="secondElem hover:cursor-pointer my-2 flex flex-col lg:flex-row items-center bg-[#F4EEEC] sm:w-[610px] lg:h-[292px] ">
         <div>
       <img src={AssetsFourImage3} className="w-[293px] h-[206px]" alt="" />
         </div>
           
       <div>
        
        <p className='text-[50px] my-1 mx-4'>BIG SALE</p>
          
      <h1 className='text-[50px] my-1 font-bold text-[#7287BB] mx-4'>NEW ITEM</h1> 
     <div className="inner my-2 mx-4 flex flex-row hover:underline-offset-4 hover:underline">
       <img src={RightSvg} alt="" className='mx-1' />
       <p className='text-[16px] mx-4'>Shop Now</p>



     </div>
     </div>
    
       </div>
       

     </div>
   </div>

    </>
  )
}
