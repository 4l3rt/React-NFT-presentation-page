import React from 'react'
import './trend.css'

export const Trend = ({mainImg, img1, img2, title, avatar, author}) => {
  return (
    <div>
        <div className='trending-grid'>
            <img className="img-main" src={mainImg}/>
            <img className="secondary-img" src={img1}/>
            <img className="secondary-img" src={img2}/>
            <div className='NFT__heading_img-count' >1025+</div>
        </div>
        <div className="NFT__trending-authors" >
            <h1 className='txt-basics' >{title}</h1>
            <div className="author" >
            <img className='logo-margin' src={avatar} />
            <p className='txt-basics' >{author}</p>
        </div>
    </div>
    </div>
  )
}

export default Trend