import React from 'react'
import ContactUsLeftPart from './ContactUsLeft'
import ContactUsRight from './ContactUsRight'



const ContactUs = () => {
  return (
    <div>
      
        <div className='grid grid-cols-12 lg:gap-10 container mx-auto  font-rajdhani mb-[65px] mt-[5%] px-[5%]'>
            <div className='col-span-12  md:col-span-12 lg:col-span-7 '>
            <ContactUsLeftPart></ContactUsLeftPart>
            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-5 '>
            <ContactUsRight></ContactUsRight>
            </div>
      
        </div>
        
    </div>

  )
}

export default ContactUs