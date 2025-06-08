import React from 'react'
import ProjectsBanner from './ProjectsBanner'
import ProjectsMain from './ProjectsMain'
import Testimonial from '../Testimonial/Testimonial'
import HomeMeetTheTeam from '../About/HomeMeetTeam'

const Projects = () => {
  return (
    <div>
        <ProjectsBanner></ProjectsBanner>
     <ProjectsMain></ProjectsMain>
     <Testimonial></Testimonial>
     <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default Projects