import React from 'react';
import "./profile.styles.scss";
import { UserDetails } from './profile-user';

import shareBtn from "../../images/_Avatar share button.svg";
import contentBtn from "../../images/Content.png";


const Profile =() => {
  return (
    <div>
        {
            UserDetails.map((user)=> {
                return(
                    <div className='profile'>
                        <div className='profile-picture' >
                            <img src={user.userImage} alt="" id='profile__img'/>
                        </div>
                        <div className='profile-name'>
                            <p id={user.id}>{user.userNameTwitter}</p>
                        </div>
                        
                        <p id='slack'>{user.userNameSlack}</p>
                        
                        <a href="/">
                            <img className='share-button' src={shareBtn} alt="" />
                        </a>
                        <a href="/">
                            <img className='content-button' src={contentBtn} alt="" />
                        </a>
                        
                        
                    </div>
                )
            })
        }
    </div>
  );
}

export default Profile;
