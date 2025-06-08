import React from 'react'

const AboutBanner = () => {
  return (
    <div className=''>
        <div
        className="flex items-center justify-center bg-auto py-10 h-[36vh] w-full"
        style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/2.jpg')" }}
      >
        <div className='text-center '> 
          <h1 className="text-[54px] font-bold font-rajdhani uppercase text-white p-4">About Us</h1>
          <span className="flex  text-base font-normal justify-center">
            <a>
              <p className="text-white text-base font-roboto mr-2"> Home</p>
            </a>
            <p className='text-gray-500 text-base font-roboto mr-2'>/</p>
            <p className="text-[#00A1E6] text-base font-roboto">About Us</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner