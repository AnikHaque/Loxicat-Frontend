import React from 'react'
import TestimonialBanner from './TestimonialBanner'
import TestimonialSlide from './TestimonialSlide'
import CounterMain from './CounterMain'
import HomeMeetTheTeam from '../About/HomeMeetTeam'

const TestimonialMain = () => {
  return (
    <div>
        <TestimonialBanner></TestimonialBanner>
        <TestimonialSlide></TestimonialSlide>
        <CounterMain></CounterMain>
        <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default TestimonialMain