import css from './ErrorMessage.module.css';
import { FC } from 'react';
import { ErrorMsgProps } from '../types';

const ErrorMessage: FC<ErrorMsgProps> = ({ error }) => {
  return (
    <p className={css.error}>
      Whoops, we found a problem!
      <br /> {error}
      <br /> Please try again later!
    </p>
  );
};

export default ErrorMessage;
