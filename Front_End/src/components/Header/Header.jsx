import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className = 'header'>
        <div className="header-contents">
            <h2>Order your favourite food here: ...</h2>
            <p>Find and choose from our favourite dishes for your dining experience</p>
            <p>Then stay home, relax and we will handle the rest, up to your door.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header