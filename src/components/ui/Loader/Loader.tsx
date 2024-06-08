import { FC } from 'react';
import s from './Loader.module.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return <div className={s.loader}></div>;
};
export default Loader;
