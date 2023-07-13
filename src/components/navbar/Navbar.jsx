import React from 'react'
import './navbar.css'
import logo from '../../assets/nav/Storefront.png'
import logotxt from '../../assets/nav/NFT Marketplace.png'
import userLogo from '../../assets/nav/User.png'

const Navbar = () => {
  return (
    <div className='NFT__navbar section-container'>
        <div className='NFT__logo'>
        <img className='logo-margin' src={logo}  />
        <img src={logotxt} />
        </div>
        <div className='NFT__navbar-anchors'>
            <a className='txt-basics'>Marketplace</a>
            <a className='txt-basics'>Rankings</a>
            <a className='txt-basics'>Connect a wallet</a>
            <button className='btn-basics'> <img className='logo-margin' src={userLogo} /> Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar