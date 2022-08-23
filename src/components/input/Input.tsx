import React from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  error: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={`form-control ${error ? 'error' : ''}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
