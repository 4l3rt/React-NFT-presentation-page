import React from 'react'
import './category.css'


function Category ({img, icon, category}) {
  return (
    <div className='NFT__Category'>
        <div className='NFT__category-img' >
            <img src={img} className='NFT__category-img-bg'/>
            <div className='blur'/>
            <img className='icon' src={icon}/>
        </div>
        <div className='NFT__category-type'>
            <p className='txt-basics'>{category}</p>
        </div>
    </div>
  )
}

export default Category