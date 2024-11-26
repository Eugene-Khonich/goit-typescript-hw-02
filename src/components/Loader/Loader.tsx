import css from './Loader.module.css';
import { Hourglass } from 'react-loader-spinner';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};

export default Loader;
