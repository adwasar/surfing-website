import { FC } from 'react';
import AlternateAuth from 'src/components/auth/AlternateAuth';
import SignUpForm from 'src/components/auth/forms/SignUpForm';

interface AuthSignUpProps {}

const AuthSignUp: FC<AuthSignUpProps> = () => {
  return (
    <>
      <SignUpForm />
      <AlternateAuth />
    </>
  );
};

export default AuthSignUp;
