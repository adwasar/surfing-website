import { FC } from 'react';

import Form from 'src/components/home/Form';

import image from '/images/hero.webp';

import s from './Hero.module.scss';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section>
      <div className="container">
        <div className={s.content}>
          <img className={s.img} src={image} height={634} width="auto" alt="wave" />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;
