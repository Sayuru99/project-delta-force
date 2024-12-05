import React from 'react';

const TextArea = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        rows="4"
        className="w-full p-3 bg-[#363631] text-gray-100 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
     
      ></textarea>
    </div>
  );
};

export default TextArea;
