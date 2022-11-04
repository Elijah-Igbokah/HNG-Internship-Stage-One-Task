import React, {useState} from 'react';

import "./contact.styles.scss";
// import FormField from '../../components/form-fields/form-fields.component';



const ContactPage =() => {

    const initialValues = {firstName: "", lastName:"", email:"", message:"" };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    };
    


  return (
    <div className="contact-page">
        <div>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div>
                    <div>
                        <div className="form-field">
                            <label htmlFor="name">First name</label>
                            <input type="text" name="name" placeholder='Enter your first name' id="" value={ formValues.firstName } onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-field">
                            <label htmlFor="name">Last name</label>
                            <input type="text" name="name" placeholder='Enter your last name' id="" value={ formValues.lastName } onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder='yourname@email.com' id="" value={ formValues.email } onChange={handleChange}/>
                    </div>        
                </div>
                <div>
                    <div className="form-field">
                        <label htmlFor="name">Message</label>
                        <textarea type="text" name="message" placeholder="Send me a message and I'll reply as soon as possible" id=""  value={ formValues.message } onChange={handleChange}/>
                    </div>                    
                </div>
                <div>
                    <div className="form-field">
                        <input type="Submit" id=""/>
                    </div>               
                </div>
                
                
            </form>
            
        </div>
      
    </div>
  );
}

export default ContactPage;
