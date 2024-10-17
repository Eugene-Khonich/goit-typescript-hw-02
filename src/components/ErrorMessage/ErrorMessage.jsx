import css from './ErrorMessage.module.css';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <p className={css.error}>
      Whoops, we found a problem!
      <br /> {errorMessage}
      <br /> Please try again later!
    </p>
  );
};

export default ErrorMessage;
