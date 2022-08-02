import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, name, value, placeholder, onChange }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
