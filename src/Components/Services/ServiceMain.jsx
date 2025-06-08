import React from 'react'
import ServiceBanner from './ServiceBanner'
import HomeServices from './HomeServices'
import Testimonial from '../Testimonial/Testimonial'
import HomeMeetTheTeam from '../About/HomeMeetTeam'

const ServiceMain = () => {
  return (
    <div>
        <ServiceBanner></ServiceBanner>
        <HomeServices></HomeServices>
        <Testimonial></Testimonial>
        <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default ServiceMain