import { FC, ReactNode } from 'react';

import Footer from 'src/components/Footer/Footer';
import ErrorBoundary from 'src/components/ErrorBoundary';

import s from './OutlineLayout.module.scss';

interface OutlineLayoutProps {
  children: ReactNode;
}

const OutlineLayout: FC<OutlineLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className={s.wrapper}>
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default OutlineLayout;
