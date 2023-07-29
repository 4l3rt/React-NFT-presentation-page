import React, { useState } from 'react'
import './hamburgerMenu.css'
import hamburgerMenuLogo from '../../assets/nav/Burger Menu.png'
import userLogo from '../../assets/nav/User.png'

const HamburgerMenu = () => {

    const [btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }

    let hamburgerClassCheck = btnState ? ' active' : null;

  return (
    <button className={`NFT__navbar-hamburgerMenu scale-down-center${hamburgerClassCheck}`} onClick={handleClick}>
        <img className='NFT__hamburgerMenuLogo' src={hamburgerMenuLogo} alt="Hamburger menu" />
        <div>
            <a href=""><p className='txt-basics scale-down-center'>Marketplace</p></a>
            <a href=""><p className='txt-basics scale-down-center'>Rankings</p></a>
            <a href=""><p className='txt-basics scale-down-center'>Connect a wallet</p></a>
            <button className='NFT__hamburgerMenu-active-sign-up scale-down-center'><img src={userLogo} alt="client-logo" /><p className='txt-basics'>Sign Up</p></button>
        </div>
    </button>
  )
}

export default HamburgerMenu