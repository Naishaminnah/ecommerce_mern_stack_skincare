import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import shopping_bag from '../Assets/shopping_bag.jpg'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useRef } from 'react'
import nav_dropdown from '../Assets/nav_dropdown.jpg'
import logo from '../Assets/logo.png'
import Profile from '../Assets/profile.jpg'


const Navbar = () => {

const [menu,setMenu]= useState("shop")
 const {getTotalCartItems} = useContext(ShopContext)
 const menuRef = useRef();
 const navigate = useNavigate();

 const dropdown_toggle = (e) =>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');
 }

  return (
    <div   className='navbar'>
   <div className='nav-logo'>
    <img src={logo} alt=''></img>
    <p  style={{textAlign:'center'}}>Luxe</p>
    </div>
    <img className='nav-dropdown' style={{marginTop:'2px'}} height='30px' width='40px' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
    <ul  ref={menuRef} className='nav-menu'>
      <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('skincare')}}><Link style={{textDecoration: 'none'}} to='/skincare'>SkinCare</Link>{menu==='skincare'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('makeup')}}><Link style={{textDecoration: 'none'}} to='/makeup'>MakeUp</Link>{menu==='makeup'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('haircare')}}><Link style={{textDecoration: 'none'}}to='/haircare'>HairCare</Link>{menu==='haircare'?<hr/>:<></>}</li>
      
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<><button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        <img className='profile_image' onClick={()=>navigate('/account')} height='40px' width='40px' src={Profile} alt='profile'/><button onClick={()=>navigate('/admin')}>Admin</button></>
      :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={shopping_bag} alt='Bag' height='50px' width='60px'></img></Link>
        <div className='nav-cart-count'>{getTotalCartItems()} </div>

      </div>


   </div>
     

  
  )    
}
export default Navbar