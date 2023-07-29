import React from 'react'
import './joinus.css'
import img from '../../assets/joinus.png'
import smallerImg from '../../assets/tabletAustronaut.png'
import mobileImg from '../../assets/phoneAustronaut.png'
import logo from '../../assets/EnvelopeSimple.png'


const Joinus = () => {
  return (
    <div className='NFT__Joinus'>
        <div className='content-spacer content-footer-padding joinus-card'>
            <img className='NFT__joinus-img' src={img} alt='Austronaut reading a newspaper' />
            <img className='NFT__joinus-smaller-img' src={smallerImg} alt='Austronaut reading a newspaper' />
            <img className='NFT__joinus-mobile-img' src={mobileImg} alt='Austronaut reading a newspaper' />
            <div className='NFT__joinus-heading-container'>
                <h1 className='txt-basics'>Join our weekly digest</h1>
                <p className='txt-basics'>Get exclusive promotions & updates straight to your inbox.</p>
                <div className='NFT__joinus-submit'> 
                    <input className='NFT__joinus-input' placeholder='Enter your email here'/>
                    <button className='btn-basics joinus-btn scale-down-center '><img alt="logo" className='NFT__logo-margin' src={logo}/>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Joinus