import React from 'react'
import { Link } from 'react-router-dom'
import FacebookSvg from '../AssetsFive/Facebook.svg'
import TwitterSvg from '../AssetsFive/Twitter.svg'
import InstagramSvg from '../AssetsFive/Insta.svg'

export default function Footer() {
  return (
   <>
   <div className=" flex flex-col lg:justify-between lg:h-[271px] items-center lg:flex-row bg-[#6D8ABB] text-white">
       <div className="firstItem flex flex-col mx-10">
           <h1 className='font-bold text-[16px] my-4'>E-commerce</h1>
           <p className='text-[15px] my-0'>© 2022 TeamHub Technologies, Inc.</p>
<p className='text-[15px] my-1'>All rights reserved.</p>

       </div>

       <ul className='flex flex-col lg:flex-row my-14 mx-10'>
           <li> 
               <Link to="/" className='my-2 mx-2 hover:underline-offset-4 hover:underline'>Home</Link>

           </li>
           <li> 
               <Link to="about" className='my-2 mx-2 hover:underline-offset-4 hover:underline'>About Us</Link>

           </li>
           <li> 
               <Link to="working" className='my-2 mx-2 hover:underline-offset-4 hover:underline'>How it works</Link>

           </li>
           <li> 
               <Link to="contact" className='my-2 mx-2 hover:underline-offset-4 hover:underline'>Contact</Link>

           </li>
         
           <li> 
               <Link to="help" className='my-2 mx-2 hover:underline-offset-4 hover:underline'>Help</Link>

           </li>
          
       </ul>

       <ul className='flex my-4 mx-10 lg:mr-32'>
           <li><img src={FacebookSvg} alt="" className='mx-3 lg:mx-7 hover:cursor-pointer' /></li>
           <li><img src={InstagramSvg} alt="" className='mx-3 lg:mx-7 hover:cursor-pointer' /></li>
           <li><img src={TwitterSvg} alt="" className='mx-3  lg:mx-7 hover:cursor-pointer'/></li>
           <li></li>
       </ul>
       

   </div>
   </>
  )
}
