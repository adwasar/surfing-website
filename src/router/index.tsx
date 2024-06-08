import BookingProceed from '../pages/BookingProceed';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import Reviews from '../pages/Reviews';
import BookingMap from '../pages/BookingMap';
import MainLayout from '../layout/main';
import ExtraLayout from 'src/layout/ExtraLayout';
import BookYouTravel from 'src/pages/BookYourTravel';
import OutlineLayout from 'src/layout/OutlineLayout';
import AuthLayout from 'src/layout/AuthLayout';
import AuthSignIn from 'src/pages/AuthSignIn';
import AuthSignUp from 'src/pages/AuthSignUp';
import OrderSuccessful from 'src/pages/OrderSuccessful';

export const router = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/booking',
    element: (
      <MainLayout>
        <BookYouTravel />
      </MainLayout>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: '/proceed',
    element: (
      <ExtraLayout>
        <BookingProceed />
      </ExtraLayout>
    ),
  },
  {
    path: '/order',
    element: (
      <ExtraLayout>
        <OrderSuccessful />
      </ExtraLayout>
    ),
  },
  {
    path: '/map',
    element: (
      <OutlineLayout>
        <BookingMap />
      </OutlineLayout>
    ),
  },
  {
    path: '/reviews',
    element: (
      <MainLayout>
        <Reviews />
      </MainLayout>
    ),
  },
  {
    path: '/signin',
    element: (
      <AuthLayout title="Sign In to Start Surfing">
        <AuthSignIn />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout title="Sign In to Start Surfing">
        <AuthSignUp />
      </AuthLayout>
    ),
  },
  {
    path: '*',
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
];
