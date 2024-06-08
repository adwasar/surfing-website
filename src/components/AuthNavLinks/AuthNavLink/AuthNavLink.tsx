import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNavLink.module.scss';

interface AuthNavLinkProps {
  text: string;
  to: string;
  onClick?: () => void;
}

const AuthNavLink: FC<AuthNavLinkProps> = ({ text, to, onClick }) => {
  return (
    <NavLink onClick={onClick} className={s.link} to={to}>
      {text}
    </NavLink>
  );
};

export default AuthNavLink;
