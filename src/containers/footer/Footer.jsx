import React from 'react'
import './footer.css'
import logotxt from '../../assets/nav/NFT Marketplace.png'
import logo from '../../assets/nav/Storefront.png'
import discord from '../../assets/DiscordLogo.png'
import youtube from '../../assets/YoutubeLogo.png'
import twitter from '../../assets/TwitterLogo.png'
import instagram from '../../assets/InstagramLogo.png'



const Footer = () => {
  return (
    <div className='NFT__footer'>
        <div className='NFT__footer-section content-footer-padding'>
            <div className='footer-info-spacer'>
                <div className='NFT__footer-container container-small'>
                    <div className='NFT__logo'>
                        <img className="logo-margin nft-logo" src={logo}  />
                        <img className="logo-txt" src={logotxt} />
                    </div>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin'>NFT marketplace UI created with Anima for Figma.</p>
                    <p className='NFT__footer-txt-secondary NFT__footer-community-margin' >Join our community</p>
                    <div className='NFT__logo' >
                        <img src={discord} className='logo-margin'/>
                        <img src={youtube} className='logo-margin'/>
                        <img src={twitter} className='logo-margin'/>
                        <img src={instagram} className='logo-margin'/>
                    </div>
                </div>
                <div className='NFT__footer-container'>
                    <h1 className='NFT__footer-container-heading txt-basics'>Explore</h1>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin'>Marketplace</p>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin'>Rankings</p>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin' >Connect a wallet</p>
                </div>
                <div className='NFT__footer-submit-container'>
                    <h1 className='NFT__footer-container-heading txt-basics'>Join our weekly digest</h1>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin' >Get exclusive promotions & updates straight to your inbox.</p>
                    <div className='NFT__joinus-submit'> 
                        <input placeholder='Enter your email here'/>
                        <button className='btn-basics'> Subscribe </button>
                    </div>
                </div>
            </div>
            <div className='footer-line-spacer'>
            <div className='copyright'>
                <div className='line'/>
                <p className='copyright-txt'>Ⓒ NFT Market. Use this template freely.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer