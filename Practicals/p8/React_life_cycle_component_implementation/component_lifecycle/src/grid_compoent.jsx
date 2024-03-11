import React from 'react';
import Photo from './photo_component'; // Make sure the path is correct

const Grid = ({ photos }) => {
  return (
    <div className="grid">
      {photos.map((src, index) => (
        <Photo key={index} src={src} />
      ))}
    </div>
  );
};

export default Grid;
