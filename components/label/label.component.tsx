import './label.style.scss';
import React from 'react';

type Props = {
  className?: string;
  htmlFor?: string;
  children?: React.ReactNode;
  required?: boolean;
};

const Label = ({ className = '', htmlFor, children, required }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${required ? 'label--required' : ''} ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
