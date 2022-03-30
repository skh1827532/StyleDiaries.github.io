import React from 'react'
import AssetTwoImage1 from '../AssetsTwo/First.svg'
import AssetTwoImage2 from '../AssetsTwo/Second.svg'
import AssetTwoImage3 from '../AssetsTwo/Third.svg'
export default function SecondComponent() {
  return (
    <>
    
       
  
           
     
        <div className=" top-0 left-0 anotherCont gap-[1rem] my-8  flex flex-col lg:flex-row bg-white rounded-[12px] w-[80vw] mx-auto border-r-[15px] border-b-[15px]  borderColor ">
            <div className="firstElem flex  flex-col justify-center items-center mx-auto">
                <div className='w-[60px] h-[60px] flex justify-center items-center    bg-[#F4EEEC] rounded-[8px] my-3'>

                <img src={AssetTwoImage1} className="mt-5 mb-5" alt="" />
                </div>
                <h1 className='font-bold text-center text-[18px]'>Safe Shopping</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                </p>

               
                


            </div>
            <div className="secondElem flex  flex-col justify-center items-center mx-auto  rounded-[18px]">
                <div className='w-[60px] h-[60px] flex justify-center items-center bg-[#F4EEEC] rounded-[8px] my-3'>

                <img src={AssetTwoImage2} className="mt-5 mb-5" alt="" />
                </div>
                <h1 className='font-bold text-center text-[18px]'>Fast Delivery</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                </p>

                


            </div>
            <div className="thirdElem flex  flex-col justify-center items-center mx-auto  rounded-[18px]">
                <div className='w-[60px] h-[60px] flex justify-center items-center    bg-[#F4EEEC] rounded-[8px] my-3'>

                <img src={AssetTwoImage3} className="mt-5 mb-5" alt="" />
                </div>
                <h1 className='font-bold text-center text-[18px]'>Free Shipping</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                </p>

               
                


            </div>
        </div>
        

       
 

    </>
  )
}
