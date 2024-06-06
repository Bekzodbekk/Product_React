import React from 'react'
import "./Contents.scss"
import Content_item from '../UIUX/content_item/Content_item'
import FirstContent from "../../images/firstContent.png"
import SecondContent from "../../images/secondItem.png"
import ThirdContent from "../../images/thirditem.png"


const Contents = () => {
  return (
    <div className='contents_container'>
        <div className="title">
            <h1>Contents Strategies</h1>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
        </div>
        <div className="items">
            <Content_item image={FirstContent} title_name={"Wahid Ari"} date={"03 March 2019"} title={"Increasing Prosperity With Positive Thinking"}/>
            <Content_item image={SecondContent} title_name={"Wahid Ari"} date={"03 March 2019"} title={"Motivation Is The First Step To Success"}/>
            <Content_item image={ThirdContent} title_name={"Wahid Ari"} date={"03 March 2019"} title={"Success Steps For Your Personal Or Business"}/>
        </div>
    </div>
  )
}

export default Contents