import React from 'react';

/**
 * Generic reusable button component.
 * 
 * @param {Object} props - The properties passed to the button component.
 * @returns A button element.
 */
const Button = ({ onClick, children, style, className = '' }) => {
  return (
    <button onClick={onClick} style={style} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
