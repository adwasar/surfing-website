import { FC } from 'react';

import Hero from 'src/components/home/Hero';
import Locations from 'src/components/home/Locations';
import CustomerFeedback from 'src/components/home/CustomerFeedback';
import WhyChooseUs from 'src/components/home/WhyChooseUs';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Locations />
      <WhyChooseUs />
      <CustomerFeedback />
    </>
  );
};

export default Home;
