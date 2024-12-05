import React from 'react';

const TextField = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-[#363631] text-gray-100 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default TextField;
