
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import ShopCategory from './Pages/ShopCategory';

import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer';
import skincare_banner from './Components/Assets/skincare_banner.jpg'
import makeup_banner from './Components/Assets/makeup_banner.jpg'
import haircare_banner from './Components/Assets/haircare_banner.jpg'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Profile from './Components/Profile/Profile';
import Company from './Components/Company/Company';
import Offices from './Components/Offices/Offices';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProductpage';
import ListProduct from './Pages/ListProductpage';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
     <Route path='/' element={<Shop />}/>
     <Route path='/skincare' element={<ShopCategory banner={skincare_banner} category="skincare"/>}/>
     <Route path='/makeup' element={<ShopCategory banner={makeup_banner} category="makeup"/>}/>
     <Route path='/haircare' element={<ShopCategory banner={haircare_banner} category="haircare"/>}/>
     <Route path='/product' element={<Product/>}>
    
     <Route path=':productId' element={<Product/>}/>
     </Route>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     <Route path='/order' element={<PlaceOrder/>}/>
     <Route path='/account' element={<Profile/>}/> 
     <Route path='/company' element={<Company/>}/>
     <Route path='/offices' element={<Offices/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/admin' element={<Admin/>}/>
      
     <Route path='/addproduct' element={<AddProduct/>}/>
     <Route path='/listproduct' element={<ListProduct/>}/>

    
     
     <Route/>
     <Route/>
    </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
