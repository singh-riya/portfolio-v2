import React, { useState } from "react";
import Header from "../Components/Header";
import "./HomePage.css";
import HeroBanner from "../Components/HeroBanner";
import PostsTab from "../Components/PostsTab";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleTabSwitch = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className='home-page'>
      <div className='header'>
        <Header />
      </div>
      <div className='hero-banner'>
        <HeroBanner handleTabSwitch={handleTabSwitch} selectedTab={selectedTab} />
      </div>
      <div className='tab-body'>
        {selectedTab === 'posts' && <PostsTab />}
      </div>
    </div>
  );
};

export default HomePage;
