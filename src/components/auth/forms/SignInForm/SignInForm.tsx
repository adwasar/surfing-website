import { FC } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'src/store/slice/authSlice';
import { setToken } from 'src/store/slice/authCookieSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

import Button from 'src/components/ui/Button';
import AuthInputField from '../../AuthInputField';

import s from './SignInForm.module.scss';
import formsStyle from '../formsStyle.module.scss';

import CloseIcon from 'src/assets/icons/close.svg?react';
import HiddenIcon from 'src/assets/icons/hidden-eye.svg?react';
import { useTranslation } from 'react-i18next';

interface SignInFormProps {
  isVisiblePass: boolean;
  clearEmailField: (setFieldValue: (field: string, value: string) => void) => void;
  togglePassVisibility: () => void;
}

interface Values {
  password: string;
  email: string;
}
//---------------------------remove after backend connect
const token = 'dummy-token';
//-----------------------------------------------------

const SignInForm: FC<SignInFormProps> = () => {
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePassVisibility = () => {
    setIsVisiblePass(!isVisiblePass);
  };
  const clearField = (fieldName: string, setFieldValue: (field: string, value: string) => void) => {
    setFieldValue(fieldName, '');
  };

  const handleLogin = () => {
    dispatch(setToken(token));
    dispatch(loginSuccess(token));
    navigate('/');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          handleLogin();
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={formsStyle.myForm}>
          <AuthInputField
            type="email"
            name="email"
            placeholder={t('Auth.Enter Email')}
            btnIcon={<CloseIcon />}
            setFieldValue={setFieldValue}
            clearField={clearField}
          />
          <AuthInputField
            type="password"
            name="password"
            placeholder={t('Auth.Enter your password')}
            isVisible={isVisiblePass}
            toggleVisibility={togglePassVisibility}
            btnIcon={<HiddenIcon />}
            value={values.password}
          />
          <NavLink to="" className={s.recoverPass}>
            {t('Auth.Recover Password')} ?
          </NavLink>
          <Button mods={['modColorPrime', 'modSize1', 'modAuthBtn']} type="submit">
            {t('Auth.Sign In')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
