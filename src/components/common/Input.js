import React from 'react';

/**
 * Generic reusable input component.
 * 
 * @param {Object} props - The properties passed to the input component.
 * @returns An input element.
 */
const Input = ({ type = "text", value, onChange, placeholder, style, className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className={`input ${className}`}
    />
  );
};

export default Input;
