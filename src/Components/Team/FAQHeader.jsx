import React from 'react'
import FAQSection from './FAQSection'



const FAQHeader = () => {
  return (
    <div>
        <div className='font-rajdhani'>
            <p className='text-[#00A1E6] text-lg underline'>FAQs</p>
            <h1 className=' text-5xl font-semibold py-7'>Common Frequently Asked Questions </h1>
            <p className='text-base font-roboto text-gray-500 pb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat earum laboriosam reiciendis numquam error impedit quod, obcaecati ullam.<br /></p>
        </div>
        <FAQSection></FAQSection>
    </div>
  )
}

export default FAQHeader