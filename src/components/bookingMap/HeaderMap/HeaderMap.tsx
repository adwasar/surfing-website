import { FC } from 'react';

import FilteredBlock from 'src/components/FilteredBlock';
import Navigation from 'src/components/Navigation';

import { navList } from 'src/constants';

import s from './HeaderMap.module.scss';

interface HeaderMapProps {}

const HeaderMap: FC<HeaderMapProps> = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__nav}>
          <Navigation navList={navList} />
        </div>
        <div className={s.header__filter}>
          <FilteredBlock />
        </div>
      </div>
    </header>
  );
};

export default HeaderMap;
