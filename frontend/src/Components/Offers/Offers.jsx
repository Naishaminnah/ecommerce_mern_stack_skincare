import React from 'react'
import './Offers.css'
import  macexclusive from '../Assets/MAC-Cosmetics-exclusive.jpg'


const Offers = () => {
  return (
    <div className='offers'>
   <div className="offers-left">
        <h1>Exclusive</h1>
       <h1>Offers For You</h1>
       <p>ONLY ON BEST SELLERS PRODUCTS</p>
       
   </div>

<div className="offers-right">

<img src={macexclusive} alt='offers' height='400px' width='650px'>


    
</img>


</div>

</div>
  )
}
export default Offers