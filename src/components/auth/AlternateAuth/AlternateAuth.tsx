import { FC } from 'react';

import AlternateAuthBtn from '../AlternateAuthBtn';

import s from './AlternateAuth.module.scss';

import GoogleIcon from 'src/assets/icons/google.svg?react';
import AppleIcon from 'src/assets/icons/apple.svg?react';
import FBIcon from 'src/assets/icons/fb.svg?react';
import { useTranslation } from 'react-i18next';

interface AlternateAuthProps {}

const AlternateAuth: FC<AlternateAuthProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className={s.continueWith}>
        <span className={s.continueWith__text}>{t('Auth.Or continue with')}</span>
      </p>
      <div className={s.authBtns}>
        <AlternateAuthBtn>
          <GoogleIcon />
        </AlternateAuthBtn>
        <AlternateAuthBtn>
          <AppleIcon />
        </AlternateAuthBtn>
        <AlternateAuthBtn>
          <FBIcon />
        </AlternateAuthBtn>
      </div>
    </>
  );
};

export default AlternateAuth;
