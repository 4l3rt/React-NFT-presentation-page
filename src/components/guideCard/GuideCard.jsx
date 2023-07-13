import React from 'react'
import "./guideCard.css"

const GuideCard = ({img, heading, text}) => {
  return (
    <div className='NFT__guideCard'>
        <img src={img}/>
        <div className='NFT__guideCard-info'>
            <h1 className='txt-basics'>{heading}</h1>
            <p className='txt-basics'>{text}</p>
        </div>
    </div>
  )
}

export default GuideCard