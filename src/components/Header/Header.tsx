import React, { FC } from 'react';

import s from './Header.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={s.header}>
      <div
        className={s.myContainer}
        style={{ justifyContent: React.Children.count(children) > 1 ? 'space-between' : 'center' }}
      >
        {children}
      </div>
    </header>
  );
};

export default Header;
