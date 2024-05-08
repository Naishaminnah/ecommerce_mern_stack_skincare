import React, { useState } from 'react'
import './CSS/Admin.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct/AddProduct'
import ListProduct from '../Components/ListProduct/ListProduct'


const Admin = () => {
   
   
  
  return (
    <div className='admin'>
      
        <Sidebar />
         
         
    </div>
  )
}

export default Admin