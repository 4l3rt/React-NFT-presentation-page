import React from 'react'
import './creator.css'

const Creator = ({img, creator, num, smallScreenDisplay}) => {
  return (
    <div className={smallScreenDisplay}>
        <div className='creator-container scale-down-center ' >
            <img className='creator-avatar' alt="creator avatar" src={img}/>
            <div className='numeration'>{num}</div>
            <div className='creator-info' >
              <h1 className='txt-basics'>{creator}</h1>
              <div className='sales'>
                  <p className='txt-basics txt-secondary'>Total Sales:</p>
                  <p className='txt-basics txt-primary'>34.53 ETH</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Creator