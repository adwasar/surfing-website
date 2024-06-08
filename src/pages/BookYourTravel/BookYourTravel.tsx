import { FC, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import FilteredBlock from 'src/components/FilteredBlock';
import ProductCard from 'src/components/ProductCard';
import SkeletonLoading from 'src/components/SkeletonLoading';

import { ProductType } from 'src/type';

import s from './BookYourTravel.module.scss';

interface BookYourTravel {}

const catalogList = {
  data: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Aqua Glide Pro ${i + 1}`,
    date: 'May 12 - 17',
    price: 56,
    favorite: i < 4,
    subCategory: i % 7 === 0 ? 'Our choice' : null,
    url: ['/images/productCard.png'],
  })),
  pages: 9,
};

const BookYourTravel: FC<BookYourTravel> = () => {
  const [catalog, setCatalog] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // Симулюємо запит на сервер, щоб отримати наступну порцію даних

    setTimeout(() => {
      const startIndex = (page - 1) * 12;
      const endIndex = startIndex + 12;
      setCatalog(catalogList.data.slice(startIndex, endIndex));
      setLoading(false);
    }, 1000); // Затримка для симуляції часу запиту
  };

  //Перше завантаження даних
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [page]);

  const handlePaginationChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={`${s.bookYouTravel} container`}>
      <div className={s.bookYouTravel__filter}>
        <FilteredBlock />
      </div>
      <div className={s.catalog}>
        <SkeletonLoading
          type="product-cards"
          isLoading={loading}
          children={catalog.map(surf => (
            <ProductCard key={surf.id} product={surf} />
          ))}
        />
      </div>
      <div className={s.pagination}>
        <Pagination count={10} onChange={handlePaginationChange} color="primary" />
      </div>
    </div>
  );
};
export default BookYourTravel;
