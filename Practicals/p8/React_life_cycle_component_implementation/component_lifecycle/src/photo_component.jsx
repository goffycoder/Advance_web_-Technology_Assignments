import React, { useState } from 'react';

const Photo = ({ src }) => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const decrementLikes = () => {
    setLikes(likes - 1);
  };


  return (
    <div className="photo">
      <img src={src} alt="Instagram photo" onClick={incrementLikes} />
      <button onClick={incrementLikes}>Like</button>
      <button onClick={decrementLikes}>Dislike</button>
      <p>{likes} Likes</p>
    </div>
  );
};

export default Photo;
