import React, { FC, ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';
import useWindowWidth from 'src/hooks/useWindowWidth';

import Header from 'src/components/Header';
import Logo from 'src/components/Logo';
import Button from 'src/components/ui/Button';

import s from './AuthLayout.module.scss';
import './CSSTransition.scss';
interface AuthLayoutProps {
  title: string | ReactElement;
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ title, children }) => {
  const { pathname } = useLocation();
  const windowWidth = useWindowWidth();
  const { t } = useTranslation();

  const [pathnameState, setPathnameState] = useState('');
  const [isVisibleForm, setIsVisibleForm] = useState(true);
  const [isVisibleLayout, setIsVisibleLayout] = useState(true);
  const [isFormStep, setIsFormStep] = useState(false);

  useEffect(() => {
    setPathnameState(pathname);
  }, [pathname]);

  useEffect(() => {
    if (windowWidth < 769 && !isFormStep) {
      setIsVisibleForm(false);
    } else {
      setIsVisibleForm(true);
      setIsVisibleLayout(true);
    }
  }, [windowWidth, isFormStep]);

  const handleButtonClick = () => {
    setIsVisibleLayout(false);
    setIsFormStep(true);
    setTimeout(() => {
      setIsVisibleForm(true);
    }, 400);
  };

  return (
    <div className={s.myContainer}>
      <Header>
        <Logo />
      </Header>
      <main className={s.main}>
        <div
          className={s.wrapper}
          style={{ justifyContent: isVisibleForm ? 'center' : 'flex-end' }}
        >
          <section
            className={classNames(
              s.layout,
              isVisibleLayout || windowWidth > 768 ? 'visible' : 'invisible',
              isVisibleForm && windowWidth < 769 ? 'none' : 'block'
            )}
          >
            <div className={s.info}>
              <p className={s.info__title}>{t('Auth.' + title)}</p>
              {pathnameState === '/signin' ? (
                <p className={s.info__text}>
                  {t('Auth.If you don’t an account you can')}
                  <NavLink to={'/signup'} className={s.link}>
                    {' '}
                    {t('Auth.Register here')}!
                  </NavLink>
                </p>
              ) : (
                <p className={s.info__text}>
                  {t('Auth.If you have an account you can')}
                  <NavLink to={'/signin'} className={s.link}>
                    {' '}
                    {t('Auth.Log In')}
                  </NavLink>
                </p>
              )}
            </div>
          </section>
          <section
            className={classNames(s.form, isVisibleForm || windowWidth > 1024 ? 'block' : 'none')}
          >
            {children}
          </section>
          {windowWidth < 769 && !isVisibleForm && (
            <Button
              onClick={handleButtonClick}
              mods={['modColorPrime', 'modSize1', 'modAuthBtn']}
              style={{ transition: 'opacity 0.4s', opacity: isVisibleLayout ? 1 : 0 }}
            >
              {t("Auth.Let's go")}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
