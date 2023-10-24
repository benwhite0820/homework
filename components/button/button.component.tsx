'use client';

import './button.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  type: 'default' | 'success' | 'cancel';
};
const Button = ({ children, type }: Props) => {
  const buttonType = {
    default: 'button--default',
    success: 'button--success',
    cancel: 'button--cancel',
  };

  return <button className={`button ${buttonType[type]}`}>{children}</button>;
};

export default Button;
