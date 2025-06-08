import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { IoEarthOutline } from 'react-icons/io5'
import { LiaDollarSignSolid } from 'react-icons/lia'
import { LuClock9 } from 'react-icons/lu'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { TiLightbulb } from 'react-icons/ti'

const ProjectDetailsTemporary = () => {
  return (
    <div className='w-96  mr-10 '>
        {/* Right Section - Project Information */}
<div className=" bg-gray-100 shadow-md p-6 rounded-none mb-10 h-full text-center ">
<h3 className="text-2xl font-semibold text-gray-900 mb-8 border border-transparent bg-white ">Project Information</h3>

<ul className="space-y-2   text-center">
  <li className="flex items-center mb-4 ">
    <div className='text-orange-500 mr-2'>
    <LuClock9 />
    </div>
  
    <span className="font-bold ">Project Date:</span>
    <span className="ml-2 text-gray-600">March 19, 2019</span>
  </li>
  <li className="flex items-center  ">
    <div className='text-orange-500 mr-2 mb-1'>
    <BsPerson />
    </div>
    <span className="font-bold mb-3">Client:</span>
    <span className="ml-2 text-gray-600 mb-3">Loxicat</span>
  </li>
  <li className="flex items-center ">
    <div className='text-[#dc6600] mr-2 mb-1' >
    <CiCreditCard1 />
    </div>
    <span className="font-bold mb-3">Categories:</span>
    <span className="ml-2 text-gray-600 mb-3">Investment, Trading</span>
  </li>
  <li className="flex items-center ">
    <div className='text-orange-500 mr-2' >
    <TiLightbulb />
    </div>
    <span className="font-bold mb-3">Skills:</span>
    <span className="ml-2 text-gray-600 mb-3">Business Planning</span>
  </li>
  <li className="flex items-center ">
    <div className='text-orange-500 mr-2'>
    <LiaDollarSignSolid/>
    </div>
    <span className="font-bold mb-3">Budget:</span>
    <span className="ml-2 text-gray-600 mb-3">$25,00,000</span>
  </li>
</ul>

<button className="mt-4 bg-[#00A1E6] text-white px-8 w-72 py-3 rounded-md hover:bg-orange-600 transition mb-5">
  LIVE PREVIEW
</button>

</div>
<div>
          {/* Contact Us Section */}
<div className="bg-gray-100 shadow-md p-6 rounded-md mt-8 lg:mt-0 mb-10 px-10 ">
<h3 className="text-2xl font-semibold text-gray-900 mb-4 w-72 border border-transparent bg-white">Contact Us</h3>
<p className="text-gray-700 mb-4">
  If you have any query about our service please contact with us
</p>
<ul className="  space-y-2 text-gray-600">
  <li className='flex '>
    <div className='text-[#dc6600]'>
  <IoEarthOutline />
  </div>
    <i className="fas fa-map-marker-alt"></i>
    <span className="ml-2 ">121 King Street, Australia</span>
  </li>
  <li className='flex'>
    <div className='text-[#dc6600]'>
  <SlEnvolopeLetter />
  </div>
    <i className="fas fa-envelope"></i>
    <span className="ml-2">example@gmail.com</span>
  </li>
  <li className='flex'>
  <div className='text-[#dc6600]'>
  <SlEnvolopeLetter />
  </div>
    <i className="fas fa-phone"></i>
    <span className="ml-2">(00) 2500-123-4567</span>
  </li>
</ul>
</div>
</div>
{/* Right Section - Leave a Message */}
<div className="bg-[#0c2239] text-white p-6 rounded-md shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Leave a Message</h3>
        <p className="mb-4">
          Drop your comments below for any query about related project
        </p>

        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Phone" 
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 rounded-md text-gray-800 bg-white focus:outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full  bg-[#00A1E6] text-white py-4 rounded-md hover:bg-orange-600 transition"
          >
            REQUEST SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProjectDetailsTemporary