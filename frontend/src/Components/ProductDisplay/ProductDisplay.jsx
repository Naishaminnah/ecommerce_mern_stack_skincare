import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

 const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>

    <div className="productdisplay-left">
     <div className="productdisplay-img-list">

      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />

    </div>

    <div className="productdisplay-img">
      <img className='productdisplay-main-img' src={product.image} alt=''/>


    </div>
    </div>

     <div className="productdisplay-right">

     <h1>{product.name}</h1>
     <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon}  alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
     </div>

     <div className="productdisplay-right-prices">
     <div className="productdisplay-right-price-old">${product.old_price}</div>
      <div className="productdisplay-right-price-new">${product.new_price}</div>
     </div>

     <div className="productdisplay-right-description">

       Authentic product manufactured from one of the best and popular wellness brands.
       We gurantee that none of our products will be harmful for any kind of skin,hair.
       These are curated from the best and by the best in the indutry.

     </div>
     
     
     <button onClick={()=>{addToCart(product.id)}}>ADD TO BAG</button>
     <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
     <p className='productdisplay-right-category'><span>Tags :</span> Luxery, Latest</p>
     </div>


    </div>
  )
}
export default ProductDisplay