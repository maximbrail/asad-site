import React from 'react'
import './styleCom.css'
import { Link } from 'react-router-dom'

export const NavCom = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
        <img className='nav-logo-img' src='https://about-asad.netlify.app/static/media/logo.492c5bc4920befbf827c.png' alt='asad'/>
        <Link to='/' className='nav-logo-title'>Asad</Link>
        </div>

        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/comparision">Comparision</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

    </div>
  )
}


export default NavCom