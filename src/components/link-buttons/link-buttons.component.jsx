import React from 'react';
import { userLinks } from '../profile/profile-user';
import { Link } from 'react-router-dom';
import "./link-buttons.styles.scss";



const LinkButtons =() => {
  return (
    <div className="links-container">
        {
            userLinks.map((user) =>{
                return(
                    
                        <div className='link-button'>
                            <a href={user.link} id={user.id} target="_blank" rel='noreferrer'>
                                    {user.title}
                            </a>
                        </div>
                )
            })
        }
        <div className='link-button'>
            <Link to="/contact" id="contact-form">
                    Contact Me
            </Link>
        </div>
      
    </div>
  );
}

export default LinkButtons;
