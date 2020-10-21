import React from 'react';

const Button = ({ children, ...props }) => (
  <button className="btn" {...props}>
    {/* Nested Spans are required for styling */}
    <span>
      <span>
        <span>
          {children}
        </span>
      </span>
    </span>
  </button>
);

export default Button;
