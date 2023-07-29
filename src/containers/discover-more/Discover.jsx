import React from 'react'
import './discover.css'
import { NFT, Heading } from '../../components'
import eye from '../../assets/Eye.png'
import img1 from '../../assets/Image Placeholder NFT1.png'
import img2 from '../../assets/Image Placeholder NFT2.png'
import img3 from '../../assets/Image Placeholder NFT3.png'
import avatar1 from '../../assets/Avatar PlaceholderNFT1.png'
import avatar2 from '../../assets/Avatar PlaceholderNFT2.png'
import avatar3 from '../../assets/Avatar PlaceholderNFT3.png'

const Discover = () => {
  return (
    <div className='NFT__discover section-container content-padding'>
      <div className='content-spacer' >
          <div className='txt-basics'>
             <Heading h1="Discover More NFTs" p="Explore new trending NFTs" />
          </div>
          <button className="btn-basics NFT__medium-screen-button scale-down-center " ><img className='NFT__logo-margin' src={eye} alt="eye logo" />See All</button>
      </div>
      <div className='NFT__discover-nfts content-spacer'>
          <NFT img={img1} title="Distant Galaxy" avatar={avatar1} author='MoonDancer' />
          <NFT img={img2} title="Life On Edena" avatar={avatar2} author='NebulaKid'/>
          <NFT img={img3} title="AstroFiction" avatar={avatar3} author='Spaceone' display="none mobile"/>
          <button className="btn-basics NFT__button-mobile mobile-margin" ><img className='NFT__logo-margin' src={eye} alt="eye" />See All</button>
      </div>

    </div>
  )
}

export default Discover