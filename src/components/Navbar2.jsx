import React, { useState } from 'react';
import svg from '../assets/image/logo2.png';
function Navbar2() {
  const [isOpen, setIsOPen] = useState(false);
  return (
    <div className=" max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
      <a href="">
        <img src={svg} alt="" width={120} height={100} />
      </a>
      <div className="links hidden md:flex text-[#56697A]  text-[18px] gap-10 font-light items-center font-outfit">
        <a href="/aboutus" className="hover:text-[#F59620]">
          Home
        </a>
        <a href="/ourworks" className="hover:text-[#F59620]">
          Our works
        </a>
        <a href="/services" className="hover:text-[#F59620]">
          Services
        </a>
        <a href="#" className="hover:text-[#F59620]">
          About Us
        </a>
        <a
          href="#"
          className=" px-6 py-[13px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620]"
        >
          Reach us
        </a>
      </div>
      <div className="flex md:hidden" onClick={() => setIsOPen(!isOpen)}>
        open
      </div>
      {isOpen ? (
        <div
          className={
            'absolute flex md:hidden w-1/2 h-[80vh] bg-black right-0 top-20 rounded-l-lg '
          }
          onClick={() => setIsOPen(true)}
        ></div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Navbar2;
