import React from 'react'
import NavInfo from './NavInfo'
import NavLast from './NavLast'
import NavTitle from './NavTitle'

const Navbar = () => {
  return (
    <div>
      <NavInfo></NavInfo>
      <NavTitle></NavTitle>
      <NavLast></NavLast>
    </div>
  )
}

export default Navbar