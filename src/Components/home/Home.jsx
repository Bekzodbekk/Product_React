import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home_container'>
        <div className="home_title">
            <h1>Work at the speed<br />of thought</h1>
            <p>Tools, tutorials, design and innovation experts, all<br />in one place! The most intuitive way to imagine<br />your next user experience.</p>

            <div className="home_btns">
                <a href="#" className='home_out_btn'>Get started</a>
                <a href="#" className='home_inner_btn'>Watch the Video</a>
            </div>
        </div>
        <div className="home_image">
            <img src={require("../../images/home_image.png")} alt="home_image" />
        </div>
    </div>
  )
}

export default Home