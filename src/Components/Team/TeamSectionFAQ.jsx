import React from 'react'
import FAQHeader from './FAQHeader'
import RequestForm from './RequestForm'


const TeamSectionFAQ = () => {
  return (
    <div className='container mx-auto  p-[5%]'>
        <div className='grid grid-cols-1  lg:grid-cols-2  gap-4 '>
            <FAQHeader></FAQHeader>
            <RequestForm></RequestForm>
        </div>
    </div>
  )
}

export default TeamSectionFAQ