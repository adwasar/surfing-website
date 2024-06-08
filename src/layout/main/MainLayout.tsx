import { FC, ReactNode } from 'react';

import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header';
import Logo from 'src/components/Logo';
import AuthNavLinks from 'src/components/AuthNavLinks';
import SwitcherLang from 'src/components/SwitcherLang';

import { navList } from 'src/constants';

import s from './MainLayout.module.scss';
import 'src/assets/scss/index.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header>
        <Logo />
        <Navigation navList={navList} />
        <div className={s.rightSide}>
          <SwitcherLang />
          <AuthNavLinks />
        </div>
      </Header>
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
