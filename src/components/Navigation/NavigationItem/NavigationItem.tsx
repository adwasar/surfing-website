import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './NavigationItem.module.scss';

interface NavItem {
  text: string;
  path: string;
}

interface NavigationItemProps {
  mods: string[];
  active: boolean;
  navItem: NavItem;
}

const NavigationItem: FC<NavigationItemProps> = ({ navItem, active, mods }) => {
  const { path, text } = navItem;
  const activeClassName = active ? s.active : '';
  const classNames = [s.navigationItem, ...mods.map(mod => s[`navigationItem--${mod}`])].join(' ');

  const { t } = useTranslation();

  return (
    <li className={`${s.navigationItem} ${activeClassName} ${classNames}`}>
      <NavLink to={path}>{t('NavItem.' + text)}</NavLink>
    </li>
  );
};

export default NavigationItem;
