import React from 'react'
import AboutBanner from './AboutBanner'
import HomeAbout from './HomeAbout'
import HomeAboutCard from './HomeAboutCard'
import Testimonial from '../Testimonial/Testimonial'
import HomeMeetTheTeam from './HomeMeetTeam'

const About = () => {
  return (
    <div>
        <AboutBanner></AboutBanner>
        <HomeAbout></HomeAbout>
        <HomeAboutCard></HomeAboutCard>
        <Testimonial></Testimonial>
        <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default About