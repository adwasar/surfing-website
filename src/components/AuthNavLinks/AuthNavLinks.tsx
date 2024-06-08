import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import AuthNavLink from './AuthNavLink';

import { RootState } from 'src/store/storeTypes';
import { removeToken } from 'src/store/slice/authCookieSlice';
import s from './AuthNavLinks.module.scss';

interface AuthNavLinksProps {}

const AuthNavLinks: FC<AuthNavLinksProps> = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(removeToken());
  };
  if (isAuthenticated)
    return <AuthNavLink to="/signin" text={t('Header.Logout')} onClick={handleLogout} />;
  else {
    return (
      <div className={s.links}>
        <AuthNavLink to="/signin" text="Sign In" />
        <AuthNavLink to="/signup" text="Register" />
      </div>
    );
  }
};

export default AuthNavLinks;
