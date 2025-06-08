import React from 'react'

const HomeLayout = () => {
  return (
    <div className='flex  items-center justify-center '>
    <div
    className=" bg-auto py-10 w-full h-full"
    style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/1.jpg')" }}
  >
     <div className='px-52 py-52'>
     <h1 className='font-extrabold text-[55px] text-white pb-6 tracking-wide leading-tight mb-3'>We <span className='text-[#FF7906]'>Provide</span> The Best <br /> Industrial Solution</h1>
<p className='text-white text-xl font-normal font-roboto pb-5 mb-3' > We Have #35+ years of experience for helping <br /> industrial services and business solutions.
</p>


<div>
<button className='bg-[#FF7906] text-lg font-roboto text-white px-16	py-4 my-6 border-2 border-[#FF7906] hover:bg-[#0C2239] rounded-md mr-5'>Our Company</button>
<button className='text-lg font-roboto text-white px-16 bg-gray-500 border-2 border-white py-4 my-6 hover:bg-[#DC6600] rounded-md'>CONTACT US</button>
</div>
     </div>
  </div>


</div>
  )
}

export default HomeLayout