import React from 'react';
import Grid from './grid_compoent'; 
import Header from './Header_component';
import './App.css'
import InstagramHeader from './instagram_header';

const Insta = () => {
  const photos = [
    '/assets/p1.webp',
    '/assets/p2.webp',
    '/assets/p3.webp',
    '/assets/p4.webp',
    '/assets/p5.webp',
    '/assets/p6.webp',
    '/assets/p7.webp',
    '/assets/p8.webp',
    '/assets/p9.webp',
  ];

  return (
    <div className="app">
      <Header /> {/* Include the Header component here */}
      <Grid photos={photos} />
    </div>
  );
};


export default Insta;
