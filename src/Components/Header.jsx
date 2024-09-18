import React from "react";
import "./Header.css";
import FbIcon from "../Assets/facebook_5968764.png";
import HomeIcon from "../Assets/home-button_9190709.png";
import VideoIcon from "../Assets/icons8-video-50.png";
import SearchIcon from "../Assets/search-icon.png";
import MarketPlaceIcon from "../Assets/icons8-marketplace-40.png";
import GameIcon from "../Assets/icons8-ps-controller-40.png";
import MenuIcon from "../Assets/icons8-small-icons-40.png";
import MessangerIcon from "../Assets/icons8-messenger-40.png";
import NotificationIcon from "../Assets/icons8-notification-40.png";
import ProfileImg from "../Assets/profile-photo.jpg";

const Header = () => {
  return (
    <div className='header-container'>
      <div className='left'>
        <div className='logo'>
          <img src={FbIcon} height='40px' alt='fb-icon' />
        </div>
        <div className='search-bar'>
          <div className='search-bar-container'>
            <img src={SearchIcon} className='search-icon' alt='Search Icon' />
            <input className='search-bar-input' placeholder='Search people' />
          </div>
        </div>
      </div>
      <div className='middle'>
        <div className='home-logo'>
          <img src={HomeIcon} height='40px' alt='fb-icon' />
        </div>
        <div className='video-logo'>
          <img src={VideoIcon} height='40px' alt='fb-icon' />
        </div>
        <div className='marketplace-logo'>
          <img src={MarketPlaceIcon} height='40px' alt='fb-icon' />
        </div>
        <div className='groups-logo'>
          <img src={GameIcon} height='40px' alt='fb-icon' />
        </div>
      </div>
      <div className='right'>
      <div className='menu-logo'>
          <img src={MenuIcon} alt='fb-icon' className="icon-size" />
        </div>
        <div className='messenger-logo'>
          <img src={MessangerIcon} alt='fb-icon' className="icon-size"/>
        </div>
        <div className='notifications'>
          <img src={NotificationIcon} alt='fb-icon' className="icon-size"/>
        </div>
        <div className='profile'>
        <img src={ProfileImg} alt='ProfileImg' className='' height='40px' width='40px' />
        </div>
      </div>
    </div>
  );
};

export default Header;
