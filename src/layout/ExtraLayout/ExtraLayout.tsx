import { FC, ReactNode } from 'react';

import Header from 'src/components/Header';
import Logo from 'src/components/Logo';

interface ExtraLayoutProps {
  children: ReactNode;
}

const ExtraLayout: FC<ExtraLayoutProps> = ({ children }) => {
  return (
    <div className="wrapperExt">
      <Header>
        <Logo />
      </Header>
      <main className="mainExt">{children}</main>
    </div>
  );
};

export default ExtraLayout;
