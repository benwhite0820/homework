import './button.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  type: 'default' | 'primary' | 'cancel';
};
const Button = ({ children, type }: Props) => {
  const buttonType = {
    default: 'button--default',
    primary: 'button--primary',
    cancel: 'button--cancel',
  };

  return <button className={`button ${buttonType[type]}`}>{children}</button>;
};

export default Button;
