import { FC } from 'react';
import { ReactNode } from 'react';
import { Field } from 'formik';

import s from './AuthInputField.module.scss';

interface AuthInputFieldProps {
  type?: string;
  name: string;
  isVisible?: boolean;
  btnIcon?: ReactNode;
  toggleVisibility?: () => void;
  value?: string;
  placeholder?: string;
  clearField?: (
    type: string,
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void
  ) => void;
  setFieldValue?: (field: string, value: string, shouldValidate?: boolean) => void;
}

const AuthInputField: FC<AuthInputFieldProps> = ({
  type,
  name,
  isVisible,
  toggleVisibility,
  clearField,
  btnIcon,
  placeholder,
  setFieldValue,
  value,
}) => {
  return (
    <div className={s.fieldContainer}>
      {type === 'password' ? (
        <>
          <Field
            id={name}
            name={name}
            placeholder={placeholder}
            type={isVisible || !value ? 'text' : 'password'}
            className={s.myForm__input}
          />
          <button onClick={toggleVisibility} className={s.fieldContainer__btn} type="button">
            {btnIcon}
          </button>
        </>
      ) : (
        <>
          <Field
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            className={s.myForm__input}
          />
          <button
            onClick={() => clearField && setFieldValue && clearField(name || '', setFieldValue)}
            className={s.fieldContainer__btn}
            type="button"
          >
            {btnIcon}
          </button>
        </>
      )}
    </div>
  );
};

export default AuthInputField;
