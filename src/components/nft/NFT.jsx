import React from 'react'
import './nft.css'

const NFT = ({img, title, avatar, author, display}) => {
  return (
<div className={display}>
    <div className='NFT__nft scale-down-center '>
        <div className='NFT__nft-img-wrapper mediumScreen-display'>
        <img className='NFT__nft-img' src={img} alt="nft-img"/>
        </div>
        <div className='NFT__nft-heading'>
            <h1 className='title txt-basics '>{title}</h1>
            <div className='author-card'>
                <img className='NFT__logo-margin' alt="avatar" src={avatar}/>
                <p className='author txt-basics '>{author}</p>
            </div>
            <div className='NFT__nft-prices'>
                <div className='NFT__nft-price'>
                    <p className='type txt-basics '>Price</p>
                    <h1 className='quantity txt-basics'>1.63 ETH</h1>
                </div>
                <div className='NFT__nft-bid' >
                    <p className='type txt-basics' >Highest Bid</p>
                    <h1 className='quantity txt-basics' >0.33 wETH</h1>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NFT