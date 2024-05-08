import React from 'react'
import './About.css'
import background4 from '../Assets/background4.jpg'

const About = () => {
  return (
    <div className='about' style={{backgroundImage:`url(${background4})`,backgroundSize:'cover'}}>
    <div className='about-description'>
       <h1>About Us</h1>
       <p>

       “Because you’re worth it.” With this world-recognized slogan, and from the beginning, Luxe has encouraged women to live their best lives according to their own rules and desires.


<br/>Committed to quality, to scientific excellence and to permanent innovation, we are proud to be the world’s leading cosmetics brand that makes the best of beauty available to all. With Luxe, beauty is synonymous with luxury and accessibility, for fans everywhere to make their own.
<br/>
Since our launch, we have not only redefined the art of e-retailing beauty and personal care in India, but also have been instrumental in fostering the growth of a previously relatively nascent ecosystem.
<br/> From bringing you domestic brands, international brands, luxury and prestige brands, premium brands, niche and cult brands and expert advice and videos, coupled with our understanding of the needs and preferences of the consumers,to more than 72 Luxe and On-Trend and Kiosk Stores, an ever growing online community for beauty buffs, and a Beauty Helpline, we go out of our way to give you only the very best. 

       </p>

    </div>


    </div>
  )
}
export default About