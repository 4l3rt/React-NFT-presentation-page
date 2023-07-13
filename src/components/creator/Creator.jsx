import React from 'react'
import './creator.css'

const Creator = ({img, creator, num}) => {
  return (
    <div>
        <div className='creator-container'>
            <img src={img}/>
            <div className='numeration'>{num}</div>
            <h1 className='txt-basics'>{creator}</h1>
            <div className='sales'>
                <p className='txt-basics txt-secondary'>Total Sales:</p>
                <p className='txt-basics txt-primary'>34.53 ETH</p>
            </div>
        </div>
    </div>
  )
}

export default Creator