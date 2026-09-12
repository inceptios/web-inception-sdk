import React, { type ButtonHTMLAttributes } from 'react';
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', style, children, ...props }) => {
  return (
    <button
      className={`button ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};