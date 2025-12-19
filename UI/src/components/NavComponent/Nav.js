import './Nav.css';
import { useState , useEffect } from 'react';

import { Link } from 'react-router-dom';

function Nav() {

    const [ NavContent , setNavContent ] = useState(); 
  
    useEffect(()=>{
      setInterval(()=>{

     if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')   
     {
      setNavContent(<>
       <div id="tooplate_menu">
                
                <ul>
                    <li><a class="current"><Link to="/admin" >AdminHome</Link></a></li>
                    <li><a><Link to="/manageusers" >&nbsp;&nbsp;ManageUsers</Link></a></li>
                    <li><a><Link to="/addcategory" >AddCategory</Link></a></li>
                    <li><a><Link to="/addsubcategory" >AddSubCategory</Link></a></li>
                    <li><a><Link to="/epadmin" >EditProfile</Link></a></li>
                    <li><a><Link to="/cpadmin" >ChangePassword</Link></a></li>
                    <li><a><Link to="/logout" >Logout</Link></a></li>
                </ul>    	
            
              <div class="cleaner"></div>
            </div>
      </>);
     }  
     else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')   
      {
       setNavContent(<>
              <div id="tooplate_menu">
                
                <ul>
                    <li><a class="current"><Link to="/user" >User Home</Link></a></li>
                    <li><a><Link to="/searchrp" >SearchRental Property </Link></a></li>
                    <li><a><Link to="/charity" >Charity </Link></a></li>
                    <li><a><Link to="/logout" >Logout</Link></a></li>
                </ul>    	
            
              <div class="cleaner"></div>
            </div>
       </>);
      }
      else
      {
        setNavContent(<>
         <div id="tooplate_menu">
                
                <ul>
                    <li><a class="current"><Link to="/" >Home</Link></a></li>
                    <li><a><Link to="/about" >About Us</Link></a></li>
                    <li><a><Link to="/contact" >Contact</Link></a></li>
                    <li><a><Link to="/ourproject" >Our Project</Link></a></li>
                    <li><a><Link to="/register" >Register</Link></a></li>
                    <li><a><Link to="/login" >Login</Link></a></li>
                </ul>    	
            
              <div class="cleaner"></div>
            </div>
        </>);
      }    
    },1);  
  },[]);

  return (
<>  
{ NavContent }
</>
  );
}

export default Nav;
