import React from "react";
import './header.css'
import imgLogo from '../../assets/RocketLaunch.png'
import spaceWalking from '../../assets/Space walking.gif'



const Header = () => {
  return (
    <div className="NFT__header section-container">
      <div className="content-spacer content-padding header-speacer-mobile">
        <div className="NFT__header_heading-container">
            <h1 className="txt-basics NFT__header-heading" >Discover digital art & Collect NFTs</h1>
            <p className="txt-basics NFT__header_heading-txt" >NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <img className="NFT__header-gif-mobile" src={spaceWalking} alt="space walking gif here" />
            <button className="btn-basics scale-down-center"> <img className="NFT__logo-margin" src={imgLogo} alt="rocket logo" /> Get Started</button>
            <div  className="NFT__header_info-container">
              <div className="NFT__header-info">
                <h1 className="txt-basics">240k+ </h1>
                <p className="txt-basics" >Total Sale </p>
              </div>
              <div className="NFT__header-info">
                <h1 className="txt-basics" >100k+</h1>
                <p className="txt-basics" >Auctions</p>
              </div>
              <div className="NFT__header-info">
                <h1 className="txt-basics" >240k+</h1>
                <p className="txt-basics">Artists</p>
              </div>
              </div>
          </div>
          <div className="NFT__header_gif-container">
              <img className="NFT__header-gif" src={spaceWalking} alt="space walking gif here" />
          </div>  
        </div>
      </div>
  )
}

export default Header