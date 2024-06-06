import React from 'react'
import "./cardbox.scss"

const Cardbox = () => {
    return (
        <div className='cardbox_container'>
            <div className="box">
                <div className="card_info">
                    <h1>Join 100 Compannies who boost their business with Product</h1>
                    <button>Get This</button>
                </div>
                <img src={require("../../images/cardbox_img.png")} alt="" />
            </div>
        </div>
    )
}

export default Cardbox