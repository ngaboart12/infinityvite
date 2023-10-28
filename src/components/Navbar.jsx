import React from "react"
import svg from '../assets/image/logo.png'
const Navbar = () => {
  return (
    <div className=" max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
    <a href="">
      <img src={svg} alt="" width={120} height={100} />

    </a>
    <div className="links hidden md:flex text-white  text-[18px] gap-10 font-light items-center font-outfit">
        
        <a href="/aboutus" className="hover:text-[#F59620]">About us</a>
        <a href="#" className="hover:text-[#F59620]">Services</a>
        <a href="#" className="hover:text-[#F59620]">About Us</a>
        <a href="#" 
        className=" px-6 py-[13px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620]">
            Reach us
        </a>
    </div>
    </div>
  )
}

export default Navbar
