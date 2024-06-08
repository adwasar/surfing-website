import { FC } from 'react';

import s from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return <h3 className={s.sectionTitle}>{text}</h3>;
};

export default SectionTitle;
