import React from 'react'
import "./footer.scss"

const Footer = () => {
    return (
        <footer className='footer_container'>
            <div className="logo_bar">
                <div className="logo_title">
                    <img src={require("../../images/logo.png")} alt="logo" />
                    <h1>Product</h1>
                </div>
                <div className="social_media">
                    <img src={require("../../images/instagram.png")} alt="instagram" />
                    <img src={require("../../images/facebook.png")} alt="facebook" />
                    <img src={require("../../images/twitter.png")} alt="twitter" />
                </div>
            </div>
            <div className="resource_bar">
                <h1>Resource</h1>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="legal_stuff">
                <h1>Legal Stuff</h1>
                <ul>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Financing</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <div className="input_bar">
                <h1>knowing you're always on the best energy deal.</h1>
                <input type="text" />
                <button>Sign up Now</button>
            </div>
        </footer>
    )
}

export default Footer