import React from "react";
import './header.css'
import button from '../../assets/Button.png'

const Header = () => {
  return (

    <div className="transit__header content-spacer">
        <div className="transit__header-container">
          <div className="transit__header-txt-top">
            <div className="transit__header-line"/>
            <h6 className="transit__header_h6">Logistics & Supply Chain Solutions</h6>
        </div>
            <h1 className="transit__header-main-txt" >Your Gateway</h1>
            <h1 className="transit__header-main-txt">to any Destination in the World</h1>
            <p className="transit__header_p-bottom">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
        <div className="transit__header-btn">
            <img src={button}/>  
        </div>
        </div>
    </div>
  )
}

export default Header
