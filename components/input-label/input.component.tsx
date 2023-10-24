'use client';

import Label from '../label/label.component';
import './input.style.scss';
import React from 'react';

type Props = {
  label?: string;
  name?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
};

const InputLabel = ({
  label,
  name,
  required = false,
  className = '',
  inputClassName = '',
  onChange,
  value,
  onBlur,
}: Props) => {
  return (
    <div className={`input-label ${className}`}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        className={`input-label__input ${inputClassName}`}
        name={name}
        id={name}
        required={required}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputLabel;
