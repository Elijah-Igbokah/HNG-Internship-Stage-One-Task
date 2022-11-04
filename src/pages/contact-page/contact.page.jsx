import React, {useState} from 'react';

import "./contact.styles.scss";



const ContactPage =() => {

    const portfolioName = "Elijah"

    const initialValues = { firstName: "", lastName:"", email:"", message:"", checkbox: false };

    const [formValues, setFormValues] = useState(initialValues);
    const [isChecked, setIsChecked] = useState(initialValues.checkbox);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleCheck = () => {
        setIsChecked(!isChecked);
        setFormValues({...formValues, checkbox:isChecked});
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(formValues);

    };

  return (
    <div className="contact-page">
        <div className="contact-form">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit}>
                <div className='names'>
                    <div className='firstname'>
                        <div className="form-field">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" name="firstName" placeholder='Enter your first name' id="" value={ formValues.firstName } onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='lastname'>
                        <div className="form-field">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" name="lastName" placeholder='Enter your last name' id="" value={ formValues.lastName } onChange={handleChange}/>
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
                <div className='check'>
                    <input type="checkbox" name="checkbox" id="checkbox"  checked={formValues.checkbox} onChange={handleCheck} />
                    <label htmlFor="checkbox">You agree to providing your data to {portfolioName} who may contact you.</label>
                </div>
                <div>
                    <div className="form-field">
                        <input type="Submit" id="submit"/>
                    </div>
                </div>
            </form>
            
        </div>
      
    </div>
  );
}

export default ContactPage;
