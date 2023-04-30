import { useEffect, useState } from 'react';

import { LoaderProps } from './Loader.props';

import styles from './Loader.module.scss';
import { Grid } from '../Grid/Grid';

export const Loader = ({ className, ...props }: LoaderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    localStorage.removeItem('loading');

    const video = document.getElementById('video');
    if (video) {
      video.onloadeddata = () => {
        setLoading(false);
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <Grid
          centerX
          centerY
          style={{
            position: 'fixed',
            zIndex: '500',
            background: 'black',
          }}>
          <div
            className={`
        ${styles.progress}
      ${className}
      `}
            {...props}></div>
        </Grid>
      )}
    </>
  );
};
