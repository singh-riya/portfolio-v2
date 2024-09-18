import React from "react";
import "./PostsTab.css";
import ProfileImg from "../Assets/profile-photo.jpg";
import PostCard from "./PostCard";
import PortfolioSS from "../Assets/profolio-ss.png";
import Calculator from "../Assets/calci-ss.png";
import TicTacGame from "../Assets/tic-tac-game.png";

const PostsTab = () => {
  const postsData = [
    {
      author: "Riya Singh",
      date: "12 September 2021",
      content: "🚀 Launched my portfolio showcasing my projects and technical skills. Check it out at https://gracious-wing-32002d.netlify.app/! It features React.js, Redux, and Node.js integration.",
      images: [PortfolioSS], // No images for this post
      reactions: { likes: 120 },
      links: [
        { url: "https://gracious-wing-32002d.netlify.app/", text: "View Portfolio" },
        { url: "https://github.com/singh-riya/My-Portfolio-Website", text: "GitHub Repo" }
      ],
      comments: [
        { author: "John Doe", text: "Wow, amazing portfolio! Loved the clean design." },
      ]
    },
    {
      author: "Riya Singh",
      date: "28 October 2023",
      content: "🧮 Just launched a simple, clean, and functional calculator built using React.js. It's responsive and designed for quick calculations on both desktop and mobile. Check it out and let me know what you think!",
      images: [Calculator], // No specific images, but you can add a screenshot of the calculator if you like
      reactions: { likes: 75 },
      comments: [
        { author: "John Doe", text: "Tried it out, works great! Simple and effective." },
      ],
      links: [
        { url: "https://my-calci.netlify.app/", text: "Try the Calculator" },
        { url: "https://github.com/singh-riya/A-Simple-Calculator", text: "View Code on GitHub" } // Assuming you have the code on GitHub
      ]
    },
    {
      author: "Riya Singh",
      date: "15 November 2023",
      content: "🎮 Just launched an interactive Tic Tac Toe game! Built using React.js, it's responsive and fun to play on both desktop and mobile. Challenge a friend or play against the computer and see who wins! Give it a try and share your feedback!",
      images: [TicTacGame], // You can add an image/screenshot of the game if you like
      reactions: { likes: 65 },
      comments: [
        { author: "John Doe", text: "Loved playing this! Simple but super fun!" },
        { author: "Jane Smith", text: "Great work, Riya! The UI is clean and easy to use." }
      ],
      links: [
        { url: "https://angry-tic-tac-toe.netlify.app/", text: "Play Tic Tac Toe" },
        { url: "https://github.com/singh-riya/tic-tac-toe", text: "View Code on GitHub" } // Assuming you have the code on GitHub
      ]
    },
    {
      author: "Riya Singh",
      date: "5 June 2021",
      content: "🎓 Completed a comprehensive React.js and Redux course! Sharpened my skills with complex state management, custom hooks, and advanced performance optimizations. Excited to apply these learnings in upcoming projects.",
      images: [], // Example image for course completion
      reactions: { likes: 88 },

      comments: [
        { author: "Sonia Kapoor", text: "Congratulations, Riya! Keep up the great learning spirit!" },
        { author: "Rahul Khanna", text: "Way to go! Looking forward to seeing what you build next." }
      ]
    }
  ];
  
    return (
      <div className='posts-tab-container'>
        <div className='posts-tab-left'>
          <div className='intro-card'>
            <div className='intro-card-title'>Introduction</div>
            <div className='intro-card-content'>
              <div className='intro-card-box'>
                🚀 4 years of crafting seamless web experiences.
              </div>
              <div className='intro-card-box'>
                🌟 React.js expert driving innovation at Walmart & Magicpin.
              </div>
              <div className='intro-card-box'>
                🔧 Built high-performance apps, boosting scalability by 40%.
              </div>
              <div className='intro-card-box'>
                💡 Passionate about merging creativity with technology.
              </div>
              <div className='intro-card-box'>
                🏆 Led projects generating multi-crore revenue boosts.
              </div>
            </div>
          </div>
          <div className='skills-card'>
            <div className='skills-card-title'>Skills</div>
            <div className='skills-card-content'>
              <div className='skills-box'>React.js</div>
              <div className='skills-box'>Redux</div>
              <div className='skills-box'>React Native</div>
              <div className='skills-box'>Node.js</div>
              <div className='skills-box'>JavaScript</div>
              <div className='skills-box'>TypeScript</div>
              <div className='skills-box'>HTML5/CSS3</div>
              <div className='skills-box'>MySQL</div>
              <div className='skills-box'>Redis</div>
            </div>
          </div>
        </div>
        <div className='posts-tab-right'>
          <div className='whats-in-your-mind'>
            <div className='wiym-header'>
              <div className='wiym-image'>
                <img src={ProfileImg} alt='ProfileImg' height='40px' className="wiym-profile-img" />
              </div>
              <div className='whats-in-your-mind-card-title'>
                <input placeholder="What have I been up to?" />
              </div>
            </div>
            <hr />
            <div className='cta-actions'>
              <div className='icon-with-text'>
                <span role="img" aria-label="interests">💼</span> Interests
              </div>
              <div className='icon-with-text'>
                <span role="img" aria-label="publication">📄</span> Publication
              </div>
              <div className='icon-with-text'>
                <span role="img" aria-label="achievement">🏆</span> Achievement
              </div>
            </div>
          </div>
          
          {/* Posts Section */}
        {postsData.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            date={post.date}
            content={post.content}
            images={post.images}
            reactions={post.reactions}
            comments={post.comments}
            links={post.links}
          />
        ))}

        </div>
      </div>
    );
  };
  
  export default PostsTab;
