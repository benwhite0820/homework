'use client';

import './button.style.scss';
import React, { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  buttonColor: 'default' | 'success' | 'cancel';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, buttonColor, onClick }: Props) => {
  const buttonColorType = {
    default: 'button--default',
    success: 'button--success',
    cancel: 'button--cancel',
  };

  return (
    <button
      className={`button ${buttonColorType[buttonColor]}`}
      disabled={buttonColor === 'default'}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
