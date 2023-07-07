import React from 'react'
import './navbar.css'
import { Header } from '../../containers'
import logo from '../../assets/Logo.png'
import clock from '../../assets/clock.png'
import phone from '../../assets/phone.png';
import letter from '../../assets/letter.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/Twitter.png'
import linkedin from '../../assets/Linkdin.png'
import pointer from '../../assets/pointer.png'

const Navbar = () => {
  return (
    <div>
        <div className='transit__navbar'>
            <div className='content-spacer transit__navbar-spacer'>
                <img src={logo} alt='Transit logo' className='transit__navbar-logo'/>
                <div className='transit__navbar-info'>
                    <div className="transit__navbar-card">
                        <img src={clock}/>
                        <div className='transit__navbar-card_text'>
                            <p >Mon - Sat 9.00 - 18.00</p>
                            <p>Sunday Closed</p>
                        </div>
                        </div> 
                        <div className="transit__navbar-card">
                            <img src={phone} className='transit__navbar-icon'/>
                            <div className='transit__navbar-card_text'>
                                <p>Mon - Sat 9.00 - 18.00</p>
                                <p>Sunday Closed</p>
                            </div>                        
                        </div> 
                            <div className="transit__navbar-card">
                                <img src={letter}/>
                                <div className='transit__navbar-card_text'>
                                    <p>Mon - Sat 9.00 - 18.00</p>
                                    <p>Sunday Closed</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            <div className='transit__headerImg'>
                <div className='transit__navbar-navigation'>
                    <div className='content-spacer'>
                        <div className='transit__navbar-navigation_links'>                  
                            <a>Home</a>
                            <div className='line'/>
                            <a>About</a>
                            <div className='line'/>
                            <div className='pages-cont'>
                                <a>Pages</a>
                                <div className='pages-slider'>
                                    <img src={pointer}/>
                                </div>
                            </div>
                            <div className='line'/>
                            <a>Project</a>
                            <div className='line'/>
                            <a>Contact</a>
                        </div>
                        <div className='transit__navbar-navigation_social'>
                            <div className='transit__navbar-navigation_social-container'>
                                <img src={instagram} />
                                <img src={facebook} /> 
                                <img src={twitter} /> 
                                <img src={linkedin} />     
                            </div>
                            <div className='transit__navbar-navigation_btn'>
                                Request Qoute   
                            </div>
                        </div>
                    </div> 
                </div>
                <Header/>
            </div>
         </div>
       
  )
}

export default Navbar;