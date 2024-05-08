import React from 'react'
import './Hero.css'
import background from '../Assets/backgroundimage.jpeg'
const Hero = () => {
  return(
    
            <div className='homepage' style={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',
            gap:'20px'}}>
              
            <p  style={{fontSize:'50px'}}>A One-Stop Online Wellness Clinic</p>
            <h6  style={{fontSize: '30px'}}>For matters of the skin,hair and body</h6>
           
        <button  style={{fontSize:'20px',height:'50px',width:'200px',border:'1px solid black',backgroundColor:'#E8FFFE'}}>Shop Now</button>
            </div>
           
            
      );



  
}
export default Hero