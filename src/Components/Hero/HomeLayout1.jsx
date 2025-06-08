import React from 'react'

const HomeLayout1 = () => {
  return (
    <div className='flex  items-start justify-center '>
        <div
        className=" bg-auto py-10 w-full h-full"
        style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/2.jpg')" }}
      >
         <div className='px-[17%] py-52'>
         <h1 className='font-extrabold text-[55px] text-white pb-6 tracking-wide leading-tight mb-3'>We <span className='text-[#0786FC]'>Provide</span> The Best <br /> Industrial Solution</h1>
    <p className='text-white text-xl font-normal font-roboto pb-5 mb-3 ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere qui magni vitae <br></br>nam assumenda cupiditate sapiente explicabo consequuntur impedit voluptates
</p>
    
    
  <div>
  <button className='bg-[#0786FC] text-lg font-roboto text-white px-16	py-4 my-6 border-2 border-[#0786FC] hover:bg-[#0786FC] rounded-md mr-5'>Our Company</button>
  <button className='text-lg font-roboto text-white px-16  border-2 border-white py-4 my-6 hover:bg-[#0786FC] rounded-md'>CONTACT US</button>
  </div>
         </div>
      </div>
    
   
</div>
  )
}

export default HomeLayout1