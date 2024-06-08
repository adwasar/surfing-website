import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import NavigationItem from './NavigationItem';

import s from './Navigation.module.scss';

interface ListItem {
  text: string;
  path: string;
  mods: string[];
}
interface NavigationProps {
  navList: ListItem[];
}

const Navigation: FC<NavigationProps> = ({ navList }) => {
  const { pathname } = useLocation();

  return (
    <nav className={s.navigation}>
      <ul className={s.navigationMenu}>
        {navList.map((item, index) => (
          <NavigationItem
            key={index}
            navItem={item}
            mods={item.mods}
            active={pathname === item.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
