import React from 'react'
import './heading.css'

const Heading = ({h1, p}) => {
  return (
    <div className='NFT__heading-component'>
        <h1 className='txt-basics'>{h1}</h1>
        <p className='txt-basics'>{p}</p>
    </div>
  )
}

export default Heading