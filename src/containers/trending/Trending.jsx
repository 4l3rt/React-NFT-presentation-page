import React from 'react'
import './trending.css'
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, avatar1, avatar2, avatar3} from './index.js'
import { Trend } from '../../components'



const Trending = () => {
  return (
    <div className='NFT__trending section-container'>
      <div className='content-spacer column content-padding'>
        <div className='NFT__trending-heading'>
          <h1 className='txt-basics'>Trending Collection</h1>
          <p className='txt-basics'>Checkout our weekly updated trending collection.</p>
        </div>
        <div className='NFT__trending-components'>
            <Trend className="NFT__trending-component" mainImg={img1} img1={img4} img2={img5} title="DSGN Animals" author="MrFox" avatar={avatar1}/>
            <Trend className="NFT__trending-component" mainImg={img2} img1={img6} img2={img7} title="Magic Mushrooms" author="Shroomie" avatar={avatar2}/>
            <Trend className="NFT__trending-component" mainImg={img3} img1={img8} img2={img9} title="Disco Machines" author="BeKind2Robots" avatar={avatar3}/>
        </div>
        </div>
      </div>
  )
}

export default Trending