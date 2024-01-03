import React from 'react'

import {
  Link
} from "react-router-dom";
export default function Navbar() {
  return (
    <>
        <nav className="Navbar" style={{color:'white',position:'sticky',zIndex:'3 '}}>
          <ul className='DesktopMenu' >
              <Link className='DesktopMenuItem' to="/About">Home</Link>
              <Link className='DesktopMenuItem'>About</Link>
              <Link className='DesktopMenuItem' to="/Projects">Projects</Link>
              <Link className='DesktopMenuItem'>Contact</Link>
          </ul>
        </nav>
    </>
  )
}   
