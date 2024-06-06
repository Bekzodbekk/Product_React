import React from 'react'
import "./productinfo.scss"
import ProductItem from '../UIUX/ProductItem/ProductItem'
import cursor from "../../images/cursor.png"
import cloud from "../../images/cloud.png"
import like from "../../images/like.png"
import time from "../../images/time.png"

const ProductInfo = () => {
    return (
        <div className='product_info_container'>
            <h1 className='title'>
                Product  was Built Specifically <br /> for You
            </h1>
            <div className="product_items">
                <ProductItem images={cursor} title={"First click tests"} parag={"While most people enjoy casino gambling,"}/>
                <ProductItem images={cloud} title={"Design surveys"} parag={"Sports betting, lottery and bingo playing for the fun"}/>
                <ProductItem images={like} title={"Preference tests"} parag={"The Myspace page defines the individual."}/>
                <ProductItem images={time} title={"Five second tests"} parag={"Personal choices and the overall personality of the person."}/>
            </div>
            <div className="product_btn">
                <a href="#">sign up now</a>
            </div>
        </div>
    )
}

export default ProductInfo