import React from 'react'
import logo2 from '../assets/image/logo2.png'

const Footer = () => {

  return (
    <div className='w-full  py-10 flex justify-center items-center px-10'>
    
    <div className=' grid grid-cols-2 md:grid-cols-4 justify-center  gap-20 pb-20'>

      <div className='flex flex-col gap-2  w-full'>
      <div className='flex flex-col gap-4 '>
        <img src={logo2} alt="" width={150} height={100}/>
        <span className='flex gap-2 items-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <path d="M13.2562 21.4334C17.5227 19.2737 20.8525 15.697 20.8525 11.3483C20.8525 6.7104 17.0653 2.95068 12.3935 2.95068C7.72168 2.95068 3.93445 6.7104 3.93445 11.3483C3.93445 15.697 7.26422 19.2737 11.5308 21.4334C12.0729 21.7078 12.7141 21.7078 13.2562 21.4334Z" stroke="#56697A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5409 11.4097C15.5409 13.1481 14.1318 14.5573 12.3934 14.5573C10.655 14.5573 9.24585 13.1481 9.24585 11.4097C9.24585 9.67141 10.655 8.26221 12.3934 8.26221C14.1318 8.26221 15.5409 9.67141 15.5409 11.4097Z" stroke="#56697A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>  <span  className='text-[14px] sm:text-[18px] text-[#56697A] font-semibold font-outfit'>Kk 678 st Kanombe Kicukiro</span></span>
        <span className='flex gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#56697A"/>
           </svg>  
          <span className='text-[14px] sm:text-[18px] text-[#56697A] font-semibold font-outfit'>Open 9 AM To 17 PM</span></span>
            </div>

      </div>
      {/* company */}
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col  '>

        <h1 className='text-[#56697A] font-bold text-[18px] items-start font-outfit'>Company</h1>
        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Our work</a>
        </ul>

        </div>
      </div>
      {/* services */}
      <div className='flex flex-col gap-2'>
      <div className='flex flex-col '>
       
        <h1 className='text-[#56697A] font-bold text-[18px] items-start  font-outfit'>Services</h1>

        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">Web development</a>
            <a href="#">System analysis</a>
            <a href="#">Data protection</a>
            <a href="#">Audit &consultancy</a>
            <a href="#">Networking</a>
            <a href="#">Graphic design</a>
        </ul>
        </div>

      </div>
      {/* technologies */}
      <div className='flex flex-col gap-2'>
      <div className='flex flex-col    '>
        <h1 className='text-[#56697A] font-bold text-[18px] font-outfit'>Technologies</h1>
        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">React js</a>
            <a href="#">Node js</a>
            <a href="#">Laravel</a>
        </ul>
        </div>

      </div>

    </div>
  </div>
  )
}

export default Footer
