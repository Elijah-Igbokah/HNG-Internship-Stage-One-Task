import React from 'react';
import "./social-section.styles.scss";

import githubIcon from "../../images/Icon.svg";
import slackIcon from "../../images/slack.svg";



const SocialIcons =() => {
  return (
    <div className="social-section">
        <a href="https://slack.com/" target="_blank" rel='noreferrer'>
            <img src={slackIcon} alt="" />
        </a>
        <a href="https://github.com/elijah-igbokah" target="_blank" rel='noreferrer'>
            <img src={githubIcon} alt="" />
        </a>
        
    </div>
  );
}

export default SocialIcons;
