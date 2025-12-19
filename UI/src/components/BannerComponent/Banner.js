import './Banner.css';
import { useState , useEffect } from 'react';

function Banner() {

  const [ BannerContent , setBannerContent ] = useState(); 
  
    useEffect(()=>{
      setInterval(()=>{

     if(localStorage.getItem('token')!=undefined)   
     {
      setBannerContent(<></>);
     }  
    else
    {
         setBannerContent(<>
            <div id="tooplate_middle_wrapper">
	<div id="tooplate_middle">
    
    	<img src="assets/images/logo1.png" alt="Image 01" />
        
        <div id="middle_content">
        	<h2><b>Tanya Poojari Project Work</b></h2>
            <p>Nullam in justo lacus, id viverra elit. Ut dignissim auctor purus, id vestibulum turpis rutrum eget. Maecenas ut ipsum pellentesque purus ullamcorper fringilla. Nunc in turpis non nisi egestas convallis in at massa.</p>
            <div class="wwu_btn"><a href="#"></a></div>
        </div>
    
    </div>
</div>
         </>);
        }    
      },1);  
    },[]);
  

  return (
  <>{ BannerContent }</>
  );
}

export default Banner;




