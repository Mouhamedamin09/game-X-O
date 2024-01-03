import React from 'react';
import './Button.css'; 

const Button = ({ onClick, children }) => {
  return (
    <button className="reset-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
