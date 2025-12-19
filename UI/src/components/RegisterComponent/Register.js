import './Register.css';
import axios from 'axios';
import { useState } from 'react';
import { __userapiurl } from '../../Api.urls';

function Register() {

  const [ name , setName ] = useState();    
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();    
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();

  const handleSubmit=()=>{
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
    axios.post(__userapiurl+"save",userDetails).then((response)=>{
      alert("User register successfully....");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((err)=>{
      console.log(err);  
    });  
  };

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">

<h2>Register Here!!!</h2>

<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" onChange={ e => setName(e.target.value) } value={name} />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" onChange={ e => setPassword(e.target.value) } value={password} />
  </div>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" onChange={ e => setMobile(e.target.value) } value={mobile} />
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" onChange={ e => setAddress(e.target.value) } value={address} ></textarea>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" onChange={ e => setCity(e.target.value) } value={city}>
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
    </select>
  </div>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    <input type="radio" onChange={ e => setGender(e.target.value) } value="male" /> Male
    &nbsp;&nbsp;
    <input type="radio" onChange={ e => setGender(e.target.value) } value="female" /> Female
  </div>
  <button type="button" class="btn btn-default" onClick={handleSubmit} >Submit</button>
</form>

</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default Register;
