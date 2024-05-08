import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    const navigate = useNavigate();
  return (
    
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p className='title'>Title</p>
        <p className='price'style={{marginLeft:'30px'}}>Price</p>
        <p className='quantity'>Quantity</p>
        <p className='total'>Total</p>
        <p className='remove' style={{marginLeft:'0px'}}>Remove</p>
    </div>
    <hr />
   {all_product.map((e)=>{
       if(cartItems[e.id]>0)
       {
          return  <div>
          <div className="cartitems-format">
  
              <img src={e.image} alt='' className='carticon-product-icon'></img>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p className='cart-p'>${e.new_price*cartItems[e.id]}</p>
              <img className='cartitems-remove-icon'src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''></img>
          </div>
          <hr />
      </div>
       }
       return null;
   })}
   <div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartitems-promobox">
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
        </div>
    </div>
   </div>
    </div>
    
    
  )
}
export default CartItems