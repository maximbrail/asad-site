import React from 'react'
import { Link } from 'react-router-dom'

export const FooterCom = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Me</h2>
          <p>Email: xadasad67@gmail.com</p>
          <p>Phone: +998994878460</p>
        </div>

        <div className="footer-section right">
          <h2>Quick Links</h2>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Skills</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </div>
      </div>
      
      <hr className="footer-divider" />
      <p className="footer-text">&copy; 2025 Asad's Portfolio. All rights reserved. I think.</p>
    </footer>
  );

}

