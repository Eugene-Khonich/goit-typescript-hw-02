const ErrorMessage = ({ errorMessage }) => {
  return (
    <p>
      Whoops, we found a problem!
      <br /> {errorMessage}
      <br /> Please try again later!
    </p>
  );
};

export default ErrorMessage;
