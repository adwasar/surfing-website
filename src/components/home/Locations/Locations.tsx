import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import anuradhapuraPath from '/images/featured-locations/anuradhapura.webp';
import badullaPath from '/images/featured-locations/badulla.webp';
import gampahaPath from '/images/featured-locations/gampaha.webp';
import jaffnaPath from '/images/featured-locations/jaffna.webp';
import kandyPath from '/images/featured-locations/kandy.webp';

import Metrics from '../Metrics';

import s from './Locations.module.scss';

interface Image {
  src: string;
  title: string;
  alt: string;
}

interface LocationsProps {}

const Locations: FC<LocationsProps> = () => {
  const { t } = useTranslation();

  const images: Image[] = [
    { src: kandyPath, title: t('LocationsSection.Kandy'), alt: 'Kandy' },
    { src: anuradhapuraPath, title: t('LocationsSection.Anuradhapura'), alt: 'Anuradhapura' },
    { src: badullaPath, title: t('LocationsSection.Badulla'), alt: 'Badulla' },
    { src: gampahaPath, title: t('LocationsSection.Gampaha'), alt: 'Gampaha' },
    { src: jaffnaPath, title: t('LocationsSection.Jaffna'), alt: 'Jaffna' },
  ];

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.content}>
          <h2 className={s.title}>{t('LocationsSection.Featured Locations')}</h2>
          <div className={s.imagesContainer}>
            {images.map((image, i) => {
              return (
                <div className={s.card} key={i}>
                  <div className={s.shadow}></div>
                  <h3 className={s.cardTitle}>{image.title}</h3>
                  <img className={s.cardImage} src={image.src} />
                </div>
              );
            })}
          </div>
          <Metrics />
        </div>
      </div>
    </section>
  );
};

export default Locations;
