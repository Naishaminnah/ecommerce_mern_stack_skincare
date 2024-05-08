import React, { useEffect, useState }  from 'react'
import './Profile.css'
import profileimage from '../Assets/backgroundimage1.jpg'
import profileicon from '../Assets/profile_icon.jpg'
import axios from 'axios'


 const Profile = () => {
  const [user,setUsers] = useState([])
 useEffect(()=>{
    axios.get('http://localhost:4000/account')
    .then(user => setUsers(user.data))
    .catch(err => console.log(err))
 },[])
  return (
   


<div className='profile' style={{backgroundImage:`url(${profileimage})`,backgroundSize:'cover'}}>

<div className='upc'>
<div className='gradient'></div>
<div className='profile-down'>
<img src={profileicon} alt=''/>
{
      user.map (user =>{
        <div>
<h1>User Name: {user.name} </h1>
<h1>Email Id: {user.email} </h1>
</div>
 })
}
<h1  style={{fontSize:'50px',textAlign:'center',paddingTop:'10px'}}> My Profile</h1>
<div className="profile-address">
  <h1>Fill Address Details</h1>

 <input className='out' type="text" placeholder='Street'/>
 <div className="multi-fields">
           <input type="text" placeholder='City'/>
           <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input  className='out' type="text" placeholder='Phone'/>
          <button>Submit</button>
          </div>
          </div>
</div>
    </div>
 
  )
}
export default Profile