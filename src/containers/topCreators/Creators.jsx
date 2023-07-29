import React from 'react'
import './creators.css'
import rocket from '../../assets/RocketLaunch2.png'
import { Creator, Heading } from '../../components'
import { creatorData } from './index.js'

const Creators = () => {
  return (
    <div className='NFT__creators'>
        <div className='content-spacer'>
            <div className='NFT__creators-heading'>
                <Heading h1="Top creators" p="Checkout Top Rated Creators on the NFT Marketplace" />
            </div>
            <div className='NFT__crators-button'>
            <button className='btn-basics NFT__medium-screen-button scale-down-center '><img className='NFT__logo-margin' src={rocket} alt='Rocket logo'/>View Rankings</button>
            </div>
        </div>
        <div className='NFT__creators-containers content-spacer'>
            {creatorData.map((item, index) => (
                <Creator img={item.img} creator={item.creator} num={item.num} smallScreenDisplay={item.display} key={item.img + index} />
            ))}
                    <button className='btn-basics NFT__button-mobile scale-down-center '><img className='NFT__logo-margin' src={rocket} alt='Rocket logo'/>View Rankings</button>
        </div>
    </div>
  )
}

export default Creators