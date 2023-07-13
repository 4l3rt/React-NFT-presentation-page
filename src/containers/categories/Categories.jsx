import React from 'react'
import './categories.css'
import { categoryData } from './index.js'
import { Category } from '../../components'

const Categories = () => {
  return (
    <div className='NFT__categories section-container content-padding '>
        <h1 className='txt-basics content-spacer'>Browse Categories</h1>
        <div className='content-spacer NFT_categories-components'>
        {categoryData.map((item, index) => (
                <Category className="NFT_categories-component" img={item.img} icon={item.icon} category={item.category} key={item.img + index} />
            ))}
        </div>
    </div>
  )
}

export default Categories