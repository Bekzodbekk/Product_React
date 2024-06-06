import React from 'react'
import PriceItem from '../UIUX/priceItem/PriceItem'
import "./price.scss"

const Price = () => {
  return (
    <div className='price_container'>
        <div className="title">
            <h1>Price Table</h1>
            <p>We offer competitive price</p>
        </div>
        <div className="price_items">
            <PriceItem />
            <PriceItem />
            <PriceItem />
        </div>
    </div>
  )
}

export default Price