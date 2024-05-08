import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import './CSS/ListProductpage.css'
import ListProduct from '../Components/ListProduct/ListProduct'
const ListProductpage = () => {
  return (
    <div className='list'>

        <Sidebar/>
        <ListProduct/>
       
    </div>
  )
}
export default ListProductpage