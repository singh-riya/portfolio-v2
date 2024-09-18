import React from "react";
import "./HeroBanner.css";
import BannerImg from "../Assets/White Blue Professional Website Developer LinkedIn Banner.png";
import ProfileImg from "../Assets/profile-photo.jpg";
import PlusImg from "../Assets/icons8-plus-24.png";
import EditImg from "../Assets/icons8-edit-24.png";
import ArrowDownImg from "../Assets/icons8-arrow-down-40.png";

const HeroBanner = (props) => {
const { handleTabSwitch, selectedTab} = props
  
  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-img-ctn'>
        <img className='hero-banner-img' src={BannerImg} alt='Banner Img' />
      </div>
      <div className='hero-banner-details-ctn'>
        <div className='profile-data-ctn'>
          <div className='profile-img-ctn'>
            <img src={ProfileImg} alt='ProfileImg' className='my-image' />
          </div>
          <div className='name-with-meta-data'>
            <div className='name'>Riya Singh</div>
            <div className='friends'>4 Years Experience</div>
          </div>
        </div>
        <div className='actions-ctn'>
          <button className='cta-blue'><img src={PlusImg} height="15px" alt="PlusImg" /><p>Add to story</p></button>
          <button className='cta-grey'><img src={EditImg} height="15px" alt="PlusImg" /><p>Edit Profile</p></button>
          <button className='cta-grey arrow-btn'><img src={ArrowDownImg} height="15px" alt="PlusImg" /></button>
        </div>
      </div>
      <div className='hero-banner-divider-ctn'>
        <hr style={{ color: "#e2e5e9" }} />
      </div>
      <div className='tabs-container'>
        <div className='tabs'>
          <div className='tab' style={{textDecoration: selectedTab === "posts" && 'underline 1px solid #0866ff', color: selectedTab === "posts" && '#0866ff'}} onClick={() => handleTabSwitch("posts")}>
            Posts
          </div>
          <div className='tab' style={{textDecoration: selectedTab === "about" && 'underline 1px solid #0866ff', color: selectedTab === "about" && '#0866ff'}} onClick={() => handleTabSwitch("about")}>
            About
          </div>
          <div className='tab' style={{textDecoration: selectedTab === "friends" && 'underline 1px solid #0866ff', color: selectedTab === "friends" && '#0866ff'}} onClick={() => handleTabSwitch("friends")}>
            Friends
          </div>
          <div className='tab' style={{textDecoration: selectedTab === "photos" && 'underline 1px solid #0866ff', color: selectedTab === "photos" && '#0866ff'}} onClick={() => handleTabSwitch("photos")}>
            Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
