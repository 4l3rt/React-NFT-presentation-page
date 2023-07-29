import React from 'react'
import './categories.css'
import { categoryData } from './index.js'
import { Category, Heading } from '../../components'

const Categories = () => {
  return (
    <div className='NFT__categories section-container content-padding '>
      <div className='content-spacer'>
        <Heading h1="Browse Categories" />
      </div>
        <div className='content-spacer NFT_categories-components'>
        {categoryData.map((item, index) => (
                <Category className="NFT_categories-component" img={item.img} icon={item.icon} category={item.category} container={item.container} key={item.img + index} />
            ))}
        </div>
    </div>
  )
}

export default Categories