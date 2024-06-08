import { useEffect, FC } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderCustomerFeedback.scss';
import ArrowPrev from 'src/assets/icons/arrow-left-btn.svg?react';
import ArrowNext from 'src/assets/icons/arrow-right-btn.svg?react';
import SlideItem from './SlideItem';
import customerFeedback from './customerFeedbackData';

interface SliderCustomerFeedbackProps {}

const SliderCustomerFeedback: FC<SliderCustomerFeedbackProps> = () => {
  useEffect(() => {
    const swiperFeedback = new Swiper('.sliderFeedback', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoHeight: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.sliderFeedback__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        680: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      },
    });
    return () => {
      swiperFeedback.destroy();
    };
  }, []);

  return (
    <div className="sliderFeedback swiper-container">
      <div className="sliderFeedback__wrapper swiper-wrapper">
        {customerFeedback.map((elem, index) => (
          <SlideItem
            key={index}
            name={elem.name}
            feedBack={elem.feedBack}
            rating={elem.rating}
            address={elem.address}
            foto={elem.foto}
          />
        ))}
      </div>
      <div className="sliderFeedback__navigation">
        <div className="sliderFeedback__paginations">
          <div className="sliderFeedback__pagination swiper-pagination"></div>
        </div>
        <div className="sliderFeedback__buttons">
          <div className="sliderFeedback__btnPrev sliderFeedback__btn-prev swiper-button-prev">
            <ArrowPrev fill="currentColor" />
          </div>
          <div className="sliderFeedback__btnNext sliderFeedback__btn-next swiper-button-next">
            <ArrowNext fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCustomerFeedback;
