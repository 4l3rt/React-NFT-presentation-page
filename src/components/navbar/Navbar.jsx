import React from 'react'
import './navbar.css'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import logo from '../../assets/nav/Storefront.png'
import logotxt from '../../assets/nav/NFT Marketplace.png'
import userLogo from '../../assets/nav/User.png'
const Navbar = () => {
  return (
    <div className='NFT__navbar section-container'>
        <div className='NFT__logo-navbar'>
        <img  className='NFT__logo-margin NFT__market-logo' alt="Main logo here" src={logo}  />
        <img className='NFT__logo-txt' src={logotxt} alt="Text of the main logo" />
        </div>
        <div className='NFT__navbar-anchors'>
            <a href="" className='txt-basics'>Marketplace</a>
            <a href="" className='txt-basics'>Rankings</a>
            <a href="" className='txt-basics'>Connect a wallet</a>
            <button className='btn-basics scale-down-center'> <img className='NFT__logo-margin' src={userLogo} alt="user logo" /> Sign Up</button>
        </div>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar