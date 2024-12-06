import React from 'react';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ options, ...props }) => {
  return (
    <select
      className="bg-black border border-white p-2 rounded"
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};