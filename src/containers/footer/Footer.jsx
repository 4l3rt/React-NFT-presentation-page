import React from 'react'
import './footer.css'
import logotxt from '../../assets/nav/NFT Marketplace.png'
import logo from '../../assets/nav/Storefront.png'
import discord from '../../assets/DiscordLogo.png'
import youtube from '../../assets/YoutubeLogo.png'
import twitter from '../../assets/TwitterLogo.png'
import instagram from '../../assets/InstagramLogo.png' 
import envelopeLogo from '../../assets/EnvelopeSimple.png'



const Footer = () => {
  return (
    <div className='NFT__footer'>
        <div className='NFT__footer-section content-footer-padding'>
            <div className='footer-info-spacer'>
                <div className='NFT__footer-container container-small'>
                    <div className='NFT__logo-footer'>
                        <img className="NFT__logo-margin nft-logo-footer" alt="logo" src={logo}  />
                        <img className="NFT__logo-txt-footer" alt="logo" src={logotxt} />
                    </div>
                    <p className='NFT__footer-txt-secondary NFT__footer-secondary-margin'>NFT marketplace UI created with Anima for Figma.</p>
                    <p className='NFT__footer-txt-secondary NFT__footer-community-margin' >Join our community</p>
                    <div className='NFT__logo NFT__footer-socal-links' >
                        <img src={discord} className='Footer__social-logo' alt="discord logo"/>
                        <img src={youtube} className='Footer__social-logo' alt="youtube logo"/>
                        <img src={twitter} className='Footer__social-logo' alt="twitter logo"/>
                        <img src={instagram}  alt="instagram logo"/>
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
                    <div className='NFT__footer-submit'> 
                        <input className='NFT__footer-input' placeholder='Enter your email here'/>
                        <button className='btn-basics footer-btn scale-down-center '><img src={envelopeLogo} className='NFT__footer-btn-envelope-logo NFT__logo-margin' alt="Envelope" /> Subscribe </button>
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