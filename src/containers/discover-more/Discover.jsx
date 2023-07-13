import React from 'react'
import './discover.css'
import eye from '../../assets/Eye.png'
import NFT from '../../components/nft/NFT'
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
          <div className='txt-basics NFT__discover-heading'>
              <h1>Discover More NFTs</h1>
              <p>Explore new trending NFTs</p>
          </div>
          <button className="btn-basics" ><img className='logo-margin' src={eye} />See All</button>
      </div>
      <div className='NFT__discover-nfts content-spacer'>
          <NFT img={img1} title="Distant Galaxy" avatar={avatar1} author='MoonDancer' />
          <NFT img={img2} title="Life On Edena" avatar={avatar2} author='NebulaKid'/>
          <NFT img={img3} title="AstroFiction" avatar={avatar3} author='Spaceone'/>
      </div>

    </div>
  )
}

export default Discover