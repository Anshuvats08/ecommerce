import React, {useEffect} from 'react'
import{Link, useNavigate} from 'react-router-dom';

const Nav=()=> {
const auth= localStorage.getItem('user');
const navigate=useNavigate()
const clearuser=()=>{
localStorage.clear();
navigate("/signup")
}

  return (
    
        <div className='nav-ul'>

        <div style={{"width":"15%", "display":"flex","justify-content":"center"}}>
        <img src='logo.jpg' 
        style={{"height":"100px", "width":"100px","border-radius":"50px"}}/>
        </div>

        <div className='ff'><lable>Product Site</lable></div>

        <div style={{"width":"80%","text-align":"center"}}>
      <ul>
        {auth?(
          <>
          <li><Link className='aa' to="product">Products</Link></li>
          <li><Link className='aa' to="/">Productlist</Link></li>
          <li><Link className='aa' to="/addproduct">Add Products</Link></li>
          <li><Link className='aa' to="/">Update Product</Link></li>
          {/* <li><Link className='aa' to="/profile">Profile</Link></li> */}
          <li><Link className='aa' onClick={clearuser} to="/Signup"> Logout </Link> </li>
          </>
        ) : (
          <>
          <li><Link className="aa" to="/Signup"> Signup</Link></li>
          <li><Link className='aa' to="/Signin">Signin</Link></li>
          </>
        )
        }
      </ul>
      </div>
    </div>
    
  )
}

export default Nav

        
      
