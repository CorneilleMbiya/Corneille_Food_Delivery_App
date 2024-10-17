import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'


const Footer = () => {
  return (
    <div className= 'footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.log3} alt = "" />
                <p>Find, choose...then stay Home, relax and we will handle the rest up to your door</p>
                <div className="footer-social-icons">
                    <img src= {assets.facebook_icon} alt = "" />
                    <img src= {assets.twitter_icon} alt = ""/>
                    <img src= {assets.linkedin_icon} alt = ""/>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+1-222-333-4545</li>
                    <li>scholas@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyriht">Copyright 2024</p>

    </div>
  )
}

export default Footer
