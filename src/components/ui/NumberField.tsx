import React from 'react';

interface NumberFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const NumberField: React.FC<NumberFieldProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-1">{label}</label>
      )}
      <input
        type="number"
        className="bg-black border border-white p-2 rounded w-full"
        {...props}
      />
    </div>
  );
};