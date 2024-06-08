import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setRegCookie } from 'src/store/slice/authCookieSlice';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';

import AuthBtn from '../../AuthBtn';
import AuthInputField from '../../AuthInputField';

import s from './SignUpForm.module.scss';
import formsStyles from '../formsStyle.module.scss';

import CloseIcon from 'src/assets/icons/close.svg?react';
import HiddenIcon from 'src/assets/icons/hidden-eye.svg?react';

interface Values {
  password: string;
  name: string;
  email: string;
  verificationPassword: string;
}

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);
  const [isVisibleVerificationPass, setIsVisibleVerificationPass] = useState<boolean>(false);

  const togglePassVisibility = () => {
    setIsVisiblePass(!isVisiblePass);
  };
  const toggleVerificationPassVisibility = () => {
    setIsVisibleVerificationPass(!isVisibleVerificationPass);
  };
  const clearField = (fieldName: string, setFieldValue: (field: string, value: string) => void) => {
    setFieldValue(fieldName, '');
  };
  const handleSubmit = (values: Values) => {
    const user = {
      name: values.name,
      email: values.email,
    };
    console.log(user);
    dispatch(setRegCookie(user));
  };
  return (
    <section className={s.section}>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          verificationPassword: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={formsStyles.myForm}>
            <AuthInputField
              type="email"
              name="email"
              placeholder={t('Auth.Enter Email')}
              btnIcon={<CloseIcon />}
              setFieldValue={setFieldValue}
              clearField={clearField}
            />

            <AuthInputField
              type="text"
              name="name"
              placeholder={t('Auth.Your full name')}
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

            <AuthInputField
              type="password"
              name="verificationPassword"
              placeholder={t('Auth.Confirm your password')}
              isVisible={isVisibleVerificationPass}
              toggleVisibility={toggleVerificationPassVisibility}
              btnIcon={<HiddenIcon />}
              value={values.verificationPassword}
            />
            <AuthBtn text={t('Auth.Sign Up')} type="submit" />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForm;
