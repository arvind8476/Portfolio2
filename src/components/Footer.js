import "./FooterStyles.css"

import React from "react"

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


const  Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20 }style={{ color:
                 "#fff", marginRight: "2rem"}}/>
                 <div>
                  <p>125 Central Park</p>
                  <p>India</p>
                 </div>
              </div>
              <div className="phone">
              <h4><FaPhone size={20 }style={{ color:
                 "#fff", marginRight: "2rem"}}/>
                 1-2323-343-23</h4>
            </div>
            
            <div className="email"></div>
              <h4><FaMailBulk size={20 }style={{ color:
                 "#fff", marginRight: "2rem"}}/>
                 info@gmail.com</h4>
            </div>
            
            <div className="right">
              <h4>About the Developer</h4>
              <p>This is me Arvind</p>
              <div className="social">
              <FaFacebook size={30 }style={{ color:
                 "#fff", marginRight: "1rem"}}/>
                 
              <FaLinkedin size={20 }style={{ color:
                 "#fff", marginRight: "2rem"}}/>

              <FaInstagram size={20 }style={{ color:
                 "#fff", marginRight: "1rem"}}/>

              </div>
            </div>

       </div>

       </div>
  )
}

export default  Footer