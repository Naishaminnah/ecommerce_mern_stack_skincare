import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import './CSS/AddProductpage.css'
import AddProduct from '../Components/AddProduct/AddProduct'
const AddProductpage = () => {
  return (
    <div className='addproduct'>
        <Sidebar/>
      <AddProduct/>
    </div>
  )
}
export default AddProductpage