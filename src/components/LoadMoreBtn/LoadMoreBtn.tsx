import css from './LoadMoreBtn.module.css';
import { FC } from 'react';
import { LoadMoreBtnProps } from '../types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ reachPage }) => {
  return (
    <button onClick={reachPage} className={css.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
