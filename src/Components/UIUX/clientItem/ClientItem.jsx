import React from 'react'
import "./clientItem.scss"

const ClientItem = () => {
  return (
    <div className='client_item'>
        <div className="stars">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
        </div>
        <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
        <div className="user">
            <img src={require("../../../images/user.png")} alt="user" />
            <div className="user_info">
                <h1>Wahid Ari</h1>
                <h4>Designer</h4>
            </div>
        </div>
    </div>
  )
}

export default ClientItem