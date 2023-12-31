import React from 'react'
export default function Navbar() {
  return (
    <>
        <nav className="Navbar" style={{color:'white',position:'sticky',zIndex:'3 '}}>
          <ul className='DesktopMenu' >
              <li className='DesktopMenuItem' >Home</li>
              <li className='DesktopMenuItem'>About</li>
              <li className='DesktopMenuItem'>Projects</li>
              <li className='DesktopMenuItem'>Contact</li>
          </ul>
        </nav>
    </>
  )
}   
