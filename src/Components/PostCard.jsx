import React from "react";
import ProfileImg from "../Assets/profile-photo.jpg";
import "./PostCard.css";

const PostCard = ({
  author,
  date,
  content,
  images,
  reactions,
  comments,
  links,
}) => {
  return (
    <div className='post-card'>
      <div className='post-header'>
        <img src={ProfileImg} alt='ProfileImg' className='post-profile-img' />
        <div className='post-details'>
          <div className='post-author'>{author}</div>
          <div className='post-date'>{date}</div>
        </div>
      </div>
      <div className='post-content'>
        <p>{content}</p>
        {images && images.length > 0 && (
          <div className='post-images'>
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Post Image ${index + 1}`} className='post-image' />
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className='post-links'>
            {links.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className='post-reactions'>
        <span>❤️ {reactions.likes} others</span>
        <span>{comments.length} comments</span>
      </div>
      <hr />
      <div className='post-actions'>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <div className='post-comments'>
        {comments.map((comment, index) => (
          <div key={index} className='comment'>
            <strong>{comment.author}</strong> {comment.text}
          </div>
        ))}
        <div className='add-comment'>
          <input type='text' placeholder='Write a comment...' />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
