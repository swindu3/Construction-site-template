import React from 'react';
import { clsx } from 'clsx';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField: React.FC<TextFieldProps> = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={clsx(
        'bg-black border border-white p-2 rounded',
        className
      )}
      {...props}
    />
  );
};