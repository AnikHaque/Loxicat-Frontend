import React from 'react'
import OurTeamBanner from './TeamBanner'
import AllMembers from './AllMembers'
import Testimonial from '../Testimonial/Testimonial'
import TeamFAQWithBG from './TeamFAQWithBG'


const Team = () => {
  return (
    <div>
        <OurTeamBanner></OurTeamBanner>
        <AllMembers></AllMembers>
        <Testimonial></Testimonial>
       <TeamFAQWithBG></TeamFAQWithBG>
    </div>
  )
}

export default Team