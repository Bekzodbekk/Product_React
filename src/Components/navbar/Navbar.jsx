import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [barshow, setbarshow] = useState(false)

    const toggleMenu = () =>{
        setbarshow(!barshow)
    }

    return (
    <div className='nav'>
        <div className="nav_logo">
            <img src={require("../../images/logo.png")} alt="logo" />
            <span>Product</span>
        </div>
        <div className="nav_menu" style={{right: barshow ? '20px' : '-100%'}}>
            <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resource</a></li>
            </ul>
            <div className="nav_btns">
                <a href="#" className='out'>Sign In</a>
                <a href="#" className='inner'>Sign Up</a>
            </div>
        </div>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
    </div>
  )
}

export default Navbar