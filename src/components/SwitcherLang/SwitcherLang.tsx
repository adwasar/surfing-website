import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLang } from 'src/store/slice/localizationSlice';
import type { RootState } from 'src/store';
import s from './SwitcherLang.module.scss';

interface SwitcherLangProps {}

const SwitcherLang: FC<SwitcherLangProps> = () => {
  const currantLang = useSelector((state: RootState) => state.localization.currantLang);

  const dispatch = useDispatch();

  const switchLang = (lang: string) => {
    dispatch(setLang(lang));
  };

  return (
    <div className={s.switcher}>
      <span
        onClick={() => switchLang('en')}
        className={`${s.lang} ${currantLang === 'en' ? s.active : null}`}
      >
        en{' '}
      </span>
      /{' '}
      <span
        onClick={() => switchLang('uk')}
        className={`${s.lang} ${currantLang === 'uk' ? s.active : null}`}
      >
        uk
      </span>
    </div>
  );
};

export default SwitcherLang;
