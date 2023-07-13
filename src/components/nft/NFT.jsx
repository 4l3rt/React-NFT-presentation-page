import React from 'react'
import './nft.css'

const NFT = ({img, title, avatar, author}) => {
  return (
    <div className='NFT__nft'>
        <img  src={img}/>
        <div className='NFT__nft-heading'>
            <h1 className='title txt-basics '>{title}</h1>
            <div className='author-card'>
                <img className='logo-margin' src={avatar}/>
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
  )
}

export default NFT