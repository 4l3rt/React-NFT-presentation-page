import React from 'react'
import './creators.css'
import rocket from '../../assets/RocketLaunch2.png'
import Creator from '../../components/creator/Creator'
import { creatorData } from './index.js'

const Creators = () => {
  return (
    <div className='NFT__creators'>
        <div className='creators-spacer'>
            <div className='NFT__creators-heading'>
                <h1 className='txt-basics'>Top creators</h1>
                <p className='txt-basics'>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <div className='NFT__crators-button'>
            <button className='btn-basics'><img className='logo-margin' src={rocket} alt='Rocket logo'/>View Rankings</button>
            </div>
        </div>
        <div className='NFT__creators-containers creators-spacer'>
            {creatorData.map((item, index) => (
                <Creator img={item.img} creator={item.creator} num={item.num} key={item.img + index} />
            ))}
        </div>
    </div>
  )
}

export default Creators