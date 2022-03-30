import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import FifthComponent from './Fifthcomponent';
import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react'

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
        <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent/> 
    <FourthComponent/>
    {/* <FifthComponent/> */}
    
    <Footer/>
   </>
  )
}
