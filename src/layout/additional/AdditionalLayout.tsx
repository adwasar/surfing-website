import { FC, ReactNode } from 'react';
import AuthNavLinks from 'src/components/AuthNavLinks';
import Header from 'src/components/Header';
import Logo from 'src/components/Logo';
import Navigation from 'src/components/Navigation';

import { navList } from 'src/constants';

interface AdditionalLayoutProps {
  children: ReactNode;
}

const AdditionalLayout: FC<AdditionalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <Logo />
        <Navigation navList={navList} />
        <AuthNavLinks />
      </Header>
      <main>{children}</main>
    </>
  );
};

export default AdditionalLayout;
