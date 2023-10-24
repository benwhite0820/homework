'use client';

import Label from '../label/label.component';
import './radio.style.scss';
import React from 'react';

type Props = {
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const RadioLabel = ({
  label,
  name,
  id,
  className = '',
  onChange,
  value,
  onBlur,
  checked,
}: Props) => {
  return (
    <div className={`radio-label ${className}`}>
      <input
        className="radio-label__input"
        name={name}
        id={id}
        type="radio"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        checked={checked}
      />
      <Label htmlFor={id} className="radio-label__label">
        {label}
      </Label>
    </div>
  );
};

export default RadioLabel;
