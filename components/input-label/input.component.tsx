import Label from '../label/label.component';
import './input.style.scss';
import React from 'react';

type Props = {
  label?: string;
  name?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
};

const InputLabel = ({
  label,
  name,
  required = false,
  className = '',
  inputClassName = '',
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
      />
    </div>
  );
};

export default InputLabel;
