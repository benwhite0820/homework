import './header.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className = '' }: Props) => {
  return <h2 className={`header ${className}`}>{children}</h2>;
};

export default Header;
