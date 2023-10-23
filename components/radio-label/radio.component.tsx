import Label from '../label/label.component';
import './radio.style.scss';
import React from 'react';

type Props = {
  label?: string;
  name?: string;
  className?: string;
};

const RadioLabel = ({ label, name, className = '' }: Props) => {
  return (
    <div className={`radio-label ${className}`}>
      <input
        className="radio-label__input"
        name={name}
        id={name}
        type="radio"
      />
      <Label htmlFor={name} className="radio-label__label">
        {label}
      </Label>
    </div>
  );
};

export default RadioLabel;
