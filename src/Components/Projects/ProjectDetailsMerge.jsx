import React from 'react'
import ProjectDetailsTemporary from './ProjectDetailsTemporary'
import SingleProjectDetails from './SingleProjectDetails'
import SingleProjectInfo from './SingleProjectInfo'

const ProjectDetailsMerge = () => {
  return (
    <div className='bg-white mt-8  '>
      <div className='lg:container lg:mx-auto lg:max-w-[1200px] grid grid-cols-12 gap-10'>
      <div className='col-span-7'>
            <SingleProjectInfo></SingleProjectInfo>
            <SingleProjectDetails></SingleProjectDetails>
        </div>
        <div className='col-span-4'>
           <ProjectDetailsTemporary></ProjectDetailsTemporary>
        </div>
      </div>
  
    </div>
  )
}

export default ProjectDetailsMerge