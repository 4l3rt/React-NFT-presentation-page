import React from 'react'
import './trend.css'

export const Trend = ({mainImg, img1, img2, title, avatar, author, tabletDisplay, phoneDisplay}) => {
  return (
  <div className={phoneDisplay}>
    <div className={tabletDisplay}>
        <div className='trending-grid'>
            <img className="img-main scale-down-center " src={mainImg} alt="nft" />
            <img className="secondary-img scale-down-center " src={img1} alt="secondary nft"/>
            <img className="secondary-img scale-down-center " src={img2} alt="secondary nft"/>
            <div className='NFT__heading_img-count scale-down-center ' >1025+</div>
        </div>
        <div className="NFT__trending-authors" >
            <h1 className='txt-basics' >{title}</h1>
            <div className="author " >
            <img className='NFT__logo-margin' src={avatar} alt="avatar" />
            <p className='txt-basics' >{author}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Trend