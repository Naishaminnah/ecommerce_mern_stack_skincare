import React, { useContext } from 'react'
import './PlaceOrder.css'
import { ShopContext } from '../../Context/ShopContext'
import qr_code from '../Assets/qr_code.png'
import placeorder from '../Assets/place_order6.avif'



const PlaceOrder = () => {
     
     
    const {getTotalCartAmount} = useContext(ShopContext)

  return (
    <div style={{margin:'0',backgroundImage:`url(${placeorder})`,height:'1000px',width:'100%',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
    
    <form className='place-order'>
        <div className="place-order-left">
             <p className='title'>Delivery Information</p>
             <div className="multi-fields" >
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name' />
             </div>
             <input style={{width:'480px'}} type="email"  placeholder='Email address'/>
             <input style={{width:'480px'}} type="text" placeholder='Street'/>
          <div className="multi-fields">
           <input type="text" placeholder='City'/>
           <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input style={{width:'480px'}} type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
         <h1 className='h1'>Total Amount</h1>
        <div className='cart_total'>
          <div className='p1'>
          <p >Sub Total  : </p>   
           <p>${getTotalCartAmount()}</p>
          </div>
          <div className='p2'>
          <p >Shipping Fee  :</p> <p> Free </p>
          </div>
          <div className='p3'>
          <p >Total  Amount: </p>  
         <p>${getTotalCartAmount()}</p>
          </div>
        </div>  
             
        <div className='scan'>
          <h3>Scan To Pay</h3>
          <img height='150px' width='150px' src={qr_code} alt=''/>
        </div>
    </div>
    
       </form>
       <div style={{height:'100px'}}></div>
       </div>
      
  )
}
export default PlaceOrder