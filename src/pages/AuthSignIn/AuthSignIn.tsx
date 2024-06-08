import { FC, useState } from 'react';

import SignInForm from 'src/components/auth/forms/SignInForm';
import AlternateAuth from 'src/components/auth/AlternateAuth';

interface AuthSignInProps {}

const AuthSignIn: FC<AuthSignInProps> = () => {
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);
  const togglePassVisibility = () => {
    setIsVisiblePass(!isVisiblePass);
  };

  const clearEmailField = (setFieldValue: (field: string, value: string) => void) => {
    setFieldValue('email', '');
  };

  return (
    <>
      <SignInForm
        isVisiblePass={isVisiblePass}
        togglePassVisibility={togglePassVisibility}
        clearEmailField={clearEmailField}
      />
      <AlternateAuth />
    </>
  );
};

export default AuthSignIn;
