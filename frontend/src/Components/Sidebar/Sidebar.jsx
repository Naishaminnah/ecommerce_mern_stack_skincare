import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import  add_product_icon from '../Assets/add_product_icon.jpg'
import product_list from '../Assets/product_list.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
            <img height='45px' src={add_product_icon} alt=''/>
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
          <div className="sidebar-item">
            <img  height='45px' src={product_list} alt='' />
            <p>Product List</p>
            </div> 
        </Link>
    </div>
  )
}

export default Sidebar