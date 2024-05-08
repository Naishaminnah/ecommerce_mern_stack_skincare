import React from 'react'
import './Offices.css'
import office1 from '../Assets/office1.jpg'
import office2 from '../Assets/office2.jpg'

const Offices = () => {
  return (
    <div className='offices'>
        <h1>Offices</h1>
        <hr></hr>
     <div className='office1'>
      <img src={office1} alt=''/>
      <p>Ann Arbor<br></br>
    2300 Traverwood Dr.<br></br>
    Ann Arbor, MI 48105<br></br>
     United States<br></br>
     Phone: +1 734-332-6500</p>

     </div>
      <div className='office2'>
      <img src={office2} alt=''/>
      <p>Atlanta<br></br>
       1105 W Peachtree NW<br></br>
       Atlanta, GA 30309<br></br>
       United States</p>


      </div>


    </div>
  )
}
export default Offices