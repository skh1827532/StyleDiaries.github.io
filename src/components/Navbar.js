import React from 'react'

import { useState,useRef } from 'react'
import HamburgerIcon from '../AssetsOne/Hamburger.svg'
import CloseIcon from '../AssetsOne/Close.svg'
import { Link } from 'react-router-dom'
  

export default function Navbar() {

    // const [currentState, setState]=useState(HamburgerIcon);
    // const [currentOp,setOpacity]=useState(0)
    // const [currentTop, setTop]=useState("-400px")
   const [isActive, setActive]=useState(false)
const hamburgerIcon=useRef(null);
const mobileNavBar=useRef(null);
    const mobileNavHandler=()=>{
      

   console.log(hamburgerIcon.current);
   hamburgerIcon.current.classList.toggle("active");
   if(hamburgerIcon.current.classList.contains("active")){
    //    mobileNavBar.current.classList.remove("top-[80px]")
       mobileNavBar.current.classList.add("left-[-800px]")
       mobileNavBar.current.classList.remove("left-[0px]")
      //  mobileNavBar.current.classList.remove("top-[80px]")
       hamburgerIcon.current.src=HamburgerIcon
   
      
   }
   else{
        //  mobileNavBar.current.classList.add("top-[80px]")
        
        
         mobileNavBar.current.classList.remove("left-[-800px]")
          mobileNavBar.current.classList.add("left-[0px]")

            hamburgerIcon.current.src=CloseIcon
   }

        

    }
  return (
      
   

    
    <>
      

     
      <nav className="p-5   md:flex firstBackgroundProperty">
        <div className="flex justify-between w-full  ">
            <h1 className='lg:mx-[70px] mx-4 text-[34px] font-bold'>Bella</h1>
         
    
           <img src={HamburgerIcon} ref={hamburgerIcon} alt="" onClick={mobileNavHandler} className="w-[30px] absolute right-2 md:hidden" />
           <ul  className={`deskstop-nav md:flex  hidden   md:items-center z-10 opacity-100 md:z-auto md:static absolute mx-16 md:py-0 py-4  md:pl-0 pl-7 md:opacity-100   text-black  transition-all ease-in duration-500  `} >
          <li className="mx-2 my-6 md:my-0">
            <Link to="/" className="text-xl hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500">Home</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="about" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">About Us</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="working" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">How it works</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="contact" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">Contact Us</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="help" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline active:">Help</Link>
          </li>
    
          
    <h2 className=""></h2>
        </ul>
        
        </div>
    
       
      </nav>
       <ul ref={mobileNavBar} className={`mobile-navbar  md:hidden w-[80vw] h-[100vh]  md:items-center z-10 opacity-100 md:z-auto md:static absolute  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  left-[-800px]  text-black  bg-white transition-all ease-in duration-500  lg:mx-[60px] `} >
          <li className="mx-2 my-6 md:my-0">
            <Link to="/" className="text-xl hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500">Home</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="about" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">About Us</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="working" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">How it works</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="contact" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">Contact Us</Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="help" className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline active:">Help</Link>
          </li>
    
          
    <h2 className=""></h2>
        </ul>
        
       {/* <script>
        function Menu(e){
          let list = document.querySelector('ul');
          e.name === 'menu' ? (e.name = "close",list.classNameList.add('top-[80px]') , list.classNameList.add('opacity-100')) :( e.name = "menu" ,list.classNameList.remove('top-[80px]'),list.classNameList.remove('opacity-100'))
        }
      </script> */}
      </>
    
    
     
    
   
  )
}
