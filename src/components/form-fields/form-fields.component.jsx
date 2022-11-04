import React from 'react';
import "./form-field.styles.scss";

const FormField =(Props) => {

// Using a switch statement to select the appropriate form fiel that is being called
    switch (Props.type){
        case "First name":
            return (
                <div className="form-field">
                    <label htmlFor="name">First name</label>
                    <input type="text" name="name" placeholder='Enter your first name' id=""/>
                </div>
              );
        case "Last name":
            return (
                <div className="form-field">
                    <label htmlFor="name">Last name</label>
                    <input type="text" name="name" placeholder='Enter your last name' id=""/>
                </div>
                );
        case "Email":
            return (
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder='yourname@email.com' id=""/>
                </div>
                );
        case "Message":
            return (
                <div className="form-field">
                    <label htmlFor="name">Message</label>
                    <input type="text" name="message" placeholder="Send me a message and I'll reply as soon as possible" id=""/>
                </div>
                );
        case "Submit":
            return (
                <div className="form-field">
                    <input type="Submit" id=""/>
                </div>
                );
        default:
            return (
                <div></div>
              );
    }

    
  
}

export default FormField;
