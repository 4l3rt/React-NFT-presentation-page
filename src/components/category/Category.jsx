import React from 'react'
import './category.css'


function Category ({img, icon, category, container}) {
  return (
  <div className={container}>
    <div className='NFT__Category scale-down-center '>
        <div className='NFT__category-img' >
            <img src={img} className='NFT__category-img-bg' alt="category img"/>
            <div className='blur'/>
            <img className='icon' src={icon} alt="category icon"/>
        </div>
        <div className='NFT__category-type'>
            <p className='txt-basics'>{category}</p>
        </div>
    </div>
  </div>
  )
}

export default Category