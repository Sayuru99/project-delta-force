import React from 'react';

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
