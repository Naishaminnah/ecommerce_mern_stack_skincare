import React from 'react'
import './Company.css'
import backgroundi from '../Assets/backgroundimage1.webp'
import logo from '../Assets/logo.png'

 const Company = () => {
  return (
    <div className='company' style={{backgroundImage:`url(${backgroundi})`,backgroundSize:'cover'}}>
     <div className='company-description'>
        <div className='head'>
            <img height='100px'src={logo} alt=''/>
            <h1>Luxe</h1>
        </div>
        <p>
    Luxe is a one-stop wellness solution for all your skin, body and hair care needs. We provide an amalgamation of medical knowledge, natural care and quality proven products - delivered to your doorstep!

Brought to you by renowned dermatologists, we are India’s best online skincare store. We provide expert hair and skin advice from dermatologists and trichologists based on your specific concern. 
</p><p>Book a consultation, sign up for our award winning programs or choose from a wide array of products that are approved by our in-house skincare specialists.

We have left no stone unturned to bring the best of products to you.</p>
<p> Completely transparent - a list of active ingredients and a detailed description of all products are visible on the website. We vouch for the authenticity of every product we sell, as we source them directly from the manufacturers.</p>
     </div>
    </div>
  ) 
}
export default Company 