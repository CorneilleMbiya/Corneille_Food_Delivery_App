import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [Menu, setMenu] = useState("Home");
  return (
    <div className = 'navbar'>
        <img src = {assets.log3} alt = "" className = "log3"/>
        <ul className = "navbar-menu">
          <li className={Menu==="Home"?"active":""}>Home</li>
          <li className={Menu==="Menu"?"active":""}>Menu</li>
          <li className={Menu==="Mobile-App"}>Mobile-App</li>
          <li className={Menu==="Contact-us"}>Contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className = "navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className = "dot"></div>
          </div>
          <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar