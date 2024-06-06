import React from 'react'
import "./ContentItem.scss"

const Content_item = (params) => {
    return (
        <div className="item_content">
            <img src={params.image} alt="" />
            <div className="content_info">
                <p>By <span>{params.title_name}</span> | {params.date}</p>
                <h1 className='hover_title'>{params.title}</h1>
            </div>
        </div>
    )
}

export default Content_item