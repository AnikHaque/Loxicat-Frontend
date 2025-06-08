import React from 'react';

const ContactUsLeftPart = () => {
  return (
    <div className='font-rajdhani mt-20 lg:mt-2'>
      <span className='flex mb-10'>
        <h1 className='font-rajdhani text-5xl font-medium mr-2'>Send</h1>
        <h1 className='font-bold text-5xl text-[#00A1E6]'>Message</h1>
      </span>
      
      <form className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <label className="block pb-5 lg:pr-5">
              <input 
                type="text" 
                placeholder="Name" 
                className="block w-full px-5 py-5 border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
              />
            </label>
          </div> 
          <div>
            <label className="block pb-5">
              <input 
                type="text" 
                placeholder="Phone" 
                className="block w-full px-5 py-5 border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
              />
            </label>
          </div>
        </div>

        <label className="block pb-5">
          <input 
            type="email" 
            placeholder="Email" 
            className="block w-full px-5 py-5 border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
          />
        </label>

        <label className="block">
          <textarea 
            placeholder="Messages" 
            className="block w-full px-5 py-5 border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-52 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
          />
        </label>
        
        <button className='px-12 py-5 my-5 font-medium font-roboto  bg-[#00A1E6] text-white hover:bg-[#0C2239] text-sm rounded-md'>
        SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default ContactUsLeftPart;