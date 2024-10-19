import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ reachPage }) => {
  return (
    <button onClick={reachPage} className={css.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
