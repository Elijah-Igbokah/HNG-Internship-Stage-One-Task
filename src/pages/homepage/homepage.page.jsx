import React from 'react';
import Center from '../../components/center/center.component';
import Footer from '../../components/footer/footer.component';
import LinkButtons from '../../components/link-buttons/link-buttons.component';
import Profile from '../../components/profile/profile.component';
import SocialIcons from '../../components/social icons/social-section.components';
import "./homepage.styles.scss";


const Homepage =() => {
  return (
    <div className="homepage">
      <div className='homepage-wrapper'>
        <div style={{marginBottom: '56px'}}>
          <Profile/>
        </div>
        <div>
          <LinkButtons/>
        </div>
        <Center>
          <div style={{width: '72px'}}>
            <SocialIcons/>
          </div>
        </Center>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Homepage;
