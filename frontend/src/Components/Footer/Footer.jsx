import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img  height='100px' width='50px' src={footer_logo} alt='logo'></img>
            <p>Luxe</p>
            </div>
            <ul className="footer-links">
                <li style={{cursor:'pointer'}}onClick={()=>navigate('/company')}>COMPANY</li>
                <li >PRODUCTS</li>
                <li style={{cursor:'pointer'}}onClick={()=>navigate('/offices')}>OFFICES</li>
                <li style={{cursor:'pointer'}}onClick={()=>navigate('/about')}>ABOUT</li>
                <li style={{cursor:'pointer'}}onClick={()=>navigate('/contact')}>CONTACT</li>
             </ul>
            
             <div className="footer-social-icon">
              <div className="footer-icons-container">
                <img src={instagram_icon} alt='instagram'></img>

              </div>
              <div className="footer-icons-container">
                <img src={pinterest_icon} alt='pinterest'></img>

              </div>
              <div className="footer-icons-container">
                <img src={whatsapp_icon} alt='whatsapp'></img>

              </div>

             
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer