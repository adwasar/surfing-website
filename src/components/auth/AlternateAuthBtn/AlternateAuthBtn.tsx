import React, { FC } from 'react';

import s from './AlternateAuthBtn.module.scss';

interface AlternateAuthBtnProps {
  children: React.ReactNode;
}

const AlternateAuthBtn: FC<AlternateAuthBtnProps> = ({ children }) => {
  return <button className={s.btn}>{children}</button>;
};

export default AlternateAuthBtn;
