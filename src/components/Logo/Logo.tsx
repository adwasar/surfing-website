import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Logo.module.scss';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Link to="/" className={s.logo}>
      <img src="/logo.svg" alt="Logo" />
    </Link>
  );
};

export default Logo;
