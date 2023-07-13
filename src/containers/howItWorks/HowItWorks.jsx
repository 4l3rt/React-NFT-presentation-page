import React from 'react'
import './howItWorks.css'
import shroomImg from '../../assets/NFT Highlight.png'
import icon1 from '../../assets/Icon.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import { GuideCard } from '../../components'

const HowItWorks = () => {
  return (
    <div className='NFT__howItWorks section-container'>
          <img src={shroomImg} className='shroom-img'/>
      <div className='NFT__howItWorks-content-padding'>
          <div className='content-spacer '>
            <div className='NFT__howItWorks-heading'>
                <h1 className='txt-basics'>How it works</h1>
                <p className='txt-basics'>Find out how to get started</p>
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