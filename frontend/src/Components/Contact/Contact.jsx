import React from 'react'
import './Contact.css'
import backi from '../Assets/backi.jpg'
const Contact = () => {
  return (
    <div className='contact' style={{backgroundImage:`url(${backi})`,backgroundSize:'cover'}}>
     <h1>Contact Us</h1>
     
    
        <h2>Reach Out</h2>
      
        <div className='contacted'><p>
  Contact Information<br/>

 Call us on +91 9310 511 571<br/>

 Landline : +91 (011) 41014755<br/>

  Mail : info@luxe.in<br/>

 Address : C 16, Pamposh Enclave,<br/>
New Delhi-110048, India</p>


      </div>

    </div>
  )
}
export default Contact