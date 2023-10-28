import React, { useState } from 'react';
import svg from '../assets/image/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOPen] = useState(true);
  return (
    <div className=" max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
      <a to="">
        <img src={svg} alt="" width={120} height={100} />
      </a>
      <div className="links hidden md:flex text-white  text-[18px] gap-10 font-light items-center font-outfit">
        <Link to="/" className="hover:text-[#F59620]">
          Home
        </Link>
        <Link to="/ourworks" className="hover:text-[#F59620]">
          Our works
        </Link>
        <Link to="/services" className="hover:text-[#F59620]">
          Services
        </Link>
        <Link to="#" className="hover:text-[#F59620]">
          About Us
        </Link>
        <Link
          to="#"
          className=" px-6 py-[13px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620]"
        >
          Reach us
        </Link>
      </div>
      <div className="flex md:hidden" onClick={() => setIsOPen(!isOpen)}>
        open
      </div>
      {isOpen ? (
        <div
          className={
            'absolute flex md:hidden w-1/2 h-[80vh] bg-white right-0 top-20 rounded-l-lg '
          }
          onClick={() => setIsOPen(true)}
        ></div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
