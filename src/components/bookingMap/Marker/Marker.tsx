import { FC } from 'react';

import s from './Marker.module.scss';

interface MarkerProps {
  content: string;
}

const Marker: FC<MarkerProps> = ({ content }) => {
  return <div className={s.marker}>{content}</div>;
};

export default Marker;
