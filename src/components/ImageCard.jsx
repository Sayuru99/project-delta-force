import React from 'react';

const ImageCard = ({ image, name, title }) => {
  return (
    <div className="bg-gray rounded-2xl overflow-hidden text-center p-4 relative">
      {/* Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto object-cover rounded-2xl"
      />
      
      {/* Name and Title Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 text-white text-left p-11">
        <h3 className="text-4xl">{name}</h3>
        <p className="text-gray-300">{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
