import React from 'react'
import "./productItem.scss"

const ProductItem = (props) => {
  return (
    <div className='item'>
        <img src={props.images} alt="image" />
        <h1>{props.title}</h1>
        <p>{props.parag}</p>
    </div>
  )
}

export default ProductItem