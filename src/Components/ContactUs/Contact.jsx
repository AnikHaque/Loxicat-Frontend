import React from 'react'
import ContactUs from './ContactUs'
import ContactUsBanner from './ContactBanner'
import ContactMap from './ContactMap'

const Contact = () => {
  return (
    <div>
        <ContactUsBanner></ContactUsBanner>
        <ContactMap></ContactMap>
       <ContactUs></ContactUs>
    </div>
  )
}

export default Contact