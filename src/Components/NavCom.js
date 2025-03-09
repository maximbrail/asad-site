import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

export const NavCom = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className='nav-logo'>
                <Link to='/'>Asad</Link>
            </div>

            <div className='nav-links'>
                <Link to='/about'>About</Link>
                <Link to='/service'>Service</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
        </nav>
    </div>
  )
}
