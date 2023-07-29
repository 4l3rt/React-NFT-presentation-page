import React from 'react'
import './howItWorks.css'


import avatar from '../../assets/Trending-Avatar2.png'
import eye from '../../assets/Eye.png'
import icon1 from '../../assets/Icon.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import { GuideCard, Heading, Timer } from '../../components'



const HowItWorks = () => {

  return (
    <div className='NFT__howItWorks section-container'>
          <div className='shroom-img'>
            <div className='shroom-gradient'>
                <div className='NFT__shroom-info content-spacer'>
                  <div className='NFT__shroom-card column'>
                    <div className='NFT__shroom-author'>
                      <img className='NFT__logo-margin' src={avatar} alt="avatar"/>
                       <p className='txt-basics'>Shroomie</p>
                      </div>
                      <h1 className='txt-basics NFT__shroom-heading'>Magic Mashrooms</h1>
                      <Timer display='NFT__shroom-timer-mobile' countdownTimestampMs="212400"/>
                      <button className='scale-down-center  btn-basics'><img src={eye} className='NFT__logo-margin' alt="eye" />See NFT</button>
                    </div>
                  <Timer display="NFT__shroom-timer" countdownTimestampMs="212400"/>    
                </div>
            </div>
          </div>
      <div className='NFT__howItWorks-content-padding'>
          <div className='content-spacer '>
            <div className='NFT__howItWorks-heading'>
                <Heading h1="How it works" p="Find out how to get started"/>
            </div>
            </div>
            <div className='NFT__howItWorks-components content-spacer'>
                <GuideCard img={icon1} heading="Setup Your wallet" text='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' />
                <GuideCard img={icon2} heading="Create Collection" text="Upload your work and setup your collection. Add a description, social links and floor price."/>
                <GuideCard img={icon3} heading="Start Earning" text="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
            </div>
          </div>
      </div>
      
  )
}

export default HowItWorks