import React from 'react';
import zuriLogo from "../../images/Zuri.Internship_Logo.svg";
import I4GLogo from "../../images/I4G.svg";
import "./footer.styles.scss";



const Footer =() => {
  return (
    <div className="footer">
        <div className='footer-icons'>
            <img src={zuriLogo} alt="" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4GLogo} alt="" />
        </div>
    </div>
  );
}

export default Footer;
