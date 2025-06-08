import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";



const ContactUsRight = () => {
  return (
    <div>
         <span className='flex mb-10'><h1 className='font-medium text-5xl mr-2'>Our </h1>
        <h1 className='font-bold text-5xl text-[#00A1E6]'>Address</h1>
        </span>

        <div>
            <div>

            </div>
            
            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center w-[72px] h-[72px] mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#00A1E6]">
            <FaMapLocationDot className='text-white text-4xl'/>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px]'>Our Address</h1>
                    <p className='text-gray-500'>32 Dora Creek, tuntable creek,</p>
                </div>
            </div>




            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center  w-[72px] h-[72px]  mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#00A1E6]">
				<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9   text-[#FFFFFF]">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px]'>Phone Number</h1>
                    <p className='text-gray-500'>+12 125-528-8542</p>
                </div>
            </div>




            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center  w-[72px] h-[72px]  mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#00A1E6]">
            <HiOutlineMailOpen className='text-white text-4xl'/>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px]'>Email Us</h1>
                    <p className='text-gray-500'>example@gmail.com</p>
                </div>
            </div>


            
           
        </div>
    </div>
  )
}

export default ContactUsRight