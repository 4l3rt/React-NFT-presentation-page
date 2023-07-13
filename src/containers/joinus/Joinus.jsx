import React from 'react'
import './joinus.css'
import img from '../../assets/joinus.png'
import logo from '../../assets/EnvelopeSimple.png'

const Joinus = () => {
  return (
    <div className='NFT__Joinus section-container'>
        <div className='content-spacer content-footer-padding joinus-card'>
            <img src={img} />
            <div className='NFT__joinus-heading-container'>
                <h1 className='txt-basics'>Join our weekly digest</h1>
                <p className='txt-basics'>Get exclusive promotions & updates straight to your inbox.</p>
                <div className='NFT__joinus-submit'> 
                    <input placeholder='Enter your email here'/>
                    <button className='btn-basics'><img className='logo-margin' src={logo}/>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Joinus