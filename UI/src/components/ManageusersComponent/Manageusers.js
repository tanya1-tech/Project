import './Manageusers.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __userapiurl } from '../../Api.urls';
import { useNavigate } from 'react-router-dom';
 
function Manageusers() {

  const navigate = useNavigate(); 
  const [ users , setUsers ] = useState([]);

  useEffect(()=>{
    axios.get(__userapiurl+"fetch",{
      params :  {"role":"user"} 
    }).then((response)=>{
      //console.log(response.data);
      setUsers(response.data);
    }).catch((error)=>{
      console.log(error);        
    });;        
  });

  var changestatususer=(_id,s)=>{
    if(s=="verify")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
      axios.patch(__userapiurl+"update",update_details).then((response)=>{
          alert("User verified successfully....");
          navigate("/manageusers");
      });
    }
    else if(s=="block")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
      axios.patch(__userapiurl+"update",update_details).then((response)=>{
          alert("User blocked successfully....");
          navigate("/manageusers");
      });
    }    
    else
    {
      var delete_details={"data":{"_id":_id}};
      axios.delete(__userapiurl+"delete",delete_details).then((response)=>{
          alert("User deleted successfully....");
          navigate("/manageusers");
      });
    }
  };

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">
<h2>View & Manage User Details!!!</h2>

<table>
<tr>  
<th>RegID</th>
<th>Name</th>
<th>Email</th>
<th>Password</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>  
<tr><td colspan="11" ><hr /></td></tr>

{
  users.map((row)=>(
    <>
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.password}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
      {row.status==1?<font color="green">Verified</font>:<font color="orange">Blocked</font>}
      </td>
      <td>
      {row.status==1?<font onClick={()=> changestatususer(row._id,'block')} color="blue" >Change Status</font>:<font onClick={()=> changestatususer(row._id,'verify')} color="blue">Change Status</font>}      
      <br/>
      <font onClick={()=> changestatususer(row._id,'delete')} color="red">DELETE</font>
      </td>
    </tr>  
    <tr><td colspan="11" ><hr /></td></tr>
    </>
  ))
}

</table>

</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default Manageusers;




