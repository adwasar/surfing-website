import { FC } from 'react';

import './SlideItem.scss';

interface SlideItemProps {
  name: string;
  feedBack: string;
  rating: string | number;
  address: string;
  foto: string | undefined;
}
const SlideItem: FC<SlideItemProps> = ({ name, address, feedBack, rating, foto }) => {
  return (
    <div className="sliderFeedback__slide swiper-slide">
      <div className="card">
        <div className="card__header">
          <div className="card__userInfo">
            <div className="card__userFoto">
              <img src={foto} alt="Foto" />
            </div>
            <div className="card__userBox">
              <span className="card__userName">{name}</span>
              <span className="card__address">{address}</span>
            </div>
          </div>
          <span className="card__rating">{rating}</span>
        </div>
        <p className="card__feedbackText">{feedBack}</p>
      </div>
    </div>
  );
};

export default SlideItem;
