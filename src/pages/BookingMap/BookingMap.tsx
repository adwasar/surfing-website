import { FC } from 'react';

import HeaderMap from 'src/components/bookingMap/HeaderMap/';
import Map from 'src/components/bookingMap/Map';

interface BookingMapProps {}

const BookingMap: FC<BookingMapProps> = () => {
  return (
    <>
      <HeaderMap />
      <Map />
    </>
  );
};

export default BookingMap;
