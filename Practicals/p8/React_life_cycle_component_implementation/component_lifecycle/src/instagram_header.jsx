import React from 'react';
import './InstagramHeader.css'; 

const InstagramHeader = () => {
  return (
    <header className="instagram-header">
      <div className="instagram-logo">InstaReact</div>
      <input type="text" placeholder="Search" className="search-input" />
      <nav className="instagram-nav">
        {/* Icons can be replaced with SVGs or icon fonts like Font Awesome */}
        <a href="/">Home</a>
        <a href="/">Discover</a>
        <a href="/">Profile</a>
      </nav>
    </header>
  );
};

export default InstagramHeader;
