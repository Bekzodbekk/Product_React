import React from 'react'
import "./priceItem.scss"

const PriceItem = () => {
  return (
    <div className='price_item'>
        <h1>Free</h1>
        <p className='desc'>Brief price description</p>

        <div className="price_box">
            <div className="price">
                <h1>0</h1>
            </div>
            <div className="date">
                <h3>$</h3>
                <p className="date_parag">
                    Per / month
                </p>
            </div>
        </div>
        <p>Only 2 Operators</p>
        <p>Notifications</p>
        <p>Landing Pages</p>
        <button>Order Now</button>
    </div>
  )
}

export default PriceItem