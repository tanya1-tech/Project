import './Contact.css';

function Contact() {
  return (
  <>  
  <div id="tooplate_content">

<div classname="content_box content_box_last">
      <h2> Welcome </h2>
      <h3>Contact Page</h3>
      <div id="tooplate_content">
                
   	<div classname="cleaner_h40"></div>
                
    <div classname="col_w460">
       	<div id="contact_form">
					<form method="post" name="contact" action="#">
	
				<label for="author">Name:</label> <input type="text" id="author" name="author" classname="required input_field" />
				<div classname="cleaner_h10"></div>
							
				<label for="email">Email:</label> <input type="text" classname="validate-email required input_field" name="email" id="email" />
				<div classname="cleaner_h10"></div>
							
				<label for="subject">Subject:</label> <input type="text" classname="validate-subject required input_field" name="subject" id="subject"/>				               
				<div classname="cleaner_h10"></div>
							
				<label for="text">Message:</label> <textarea id="text" name="text" rows="0" cols="0" classname="required"></textarea>
				<div classname="cleaner_h10"></div>  
							              
				<input type="submit" value="Send" id="submit" name="submit" classname="submit_btn float_l" />
							
				<input type="reset" value="Reset" id="reset" name="reset" classname="submit_btn float_r" />
	
			</form>

        </div>
   	</div>
                
 	<div classname="col_w460 last_col">
	    <h4>Mailing Addresses</h4>
        <h6>Company Name 1</h6>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
       1234567890 <br />
                    
        <div classname="hr_divider"></div><br />
                    
        <h6>Company Name 2</h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        0987654321 <br />
                    
    </div>                

    <div classname="cleaner"></div>
</div>
</div>

<div classname="cleaner"></div>
</div>
  </>
  );
}

export default Contact;
