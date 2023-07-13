import React from "react";
import './header.css'
import imgLogo from '../../assets/RocketLaunch.png'
import headerImg from '../../assets/Image Placeholder.png'
import avatar from '../../assets/Avatar Placeholder.png'



const Header = () => {
  return (
    <div className="NFT__header section-container">
      <div className="content-spacer content-padding">
        <div className="NFT__header_heading-container">
            <h1 className="txt-basics NFT__header-heading" >Discover digital art & Collect NFTs</h1>
            <p className="txt-basics NFT__header_heading-txt" >NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <button className="btn-basics"> <img className="logo-margin" src={imgLogo}/> Get Started</button>
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
          <div className="NFT__header_img-container">
              <img src={headerImg}/>
              <div className="NFT__header_img-info">
                <h1 className="txt-basics">Space Walking</h1>
                <div className="NFT__header_img-artist">
                  <img className="logo-margin" src={avatar}/>              
                  <p className="txt-basics" >Space Walking</p>
                </div>
            </div>
          </div>  
        </div>
      </div>
  )
}

export default Header