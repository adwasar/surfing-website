import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from 'src/components/ui/Button/Button';
import NavigationItem from '../Navigation/NavigationItem';
import s from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const navList = [
  { text: 'Home page', path: '/', mods: ['footer'] },
  { text: 'List', path: '#', mods: ['footer'] },
  { text: 'Map', path: '/map', mods: ['footer'] },
];

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { pathname } = useLocation();
  const mods = ['contacts'];

  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__body}>
          <div className={s.footer__box}>
            <Logo />
            <nav className={s.nav}>
              <ul className={s.nav__list}>
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
          </div>
          <div className={s.footer__contacts}>
            <span className={s.footer__contacts_text}>{t("Footer.Let's do it")}! —</span>
            <Button mods={mods}>{t('Footer.Contact Us')}</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
