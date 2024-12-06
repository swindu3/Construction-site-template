import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'link';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      className={clsx(
        'transition-colors',
        {
          'bg-white text-black px-6 py-2 rounded hover:bg-gray-100': variant === 'primary',
          'underline hover:text-gray-300': variant === 'link',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};