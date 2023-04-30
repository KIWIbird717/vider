import { CardProps } from './Card.props';

import styles from './Card.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import { Button } from '../../Atoms/Button/Button';
import { useState } from 'react';
import useMobile from '../../../hooks/useMobile';

const { card } = styles;

export const Card = ({ ...props }: CardProps): JSX.Element => {
  const [count, setCount] = useState(0);

  function more() {
    setCount(count + 1);
  }

  function less() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function changeCount(e) {
    setCount(Number(e.target.value));
  }

  const mobile = useMobile();

  return (
    <div style={{ width: mobile ? 'calc(var(--index) * 23)' : 'calc(var(--index) * 18)' }} className={card} {...props}>
      <Grid
        centerY
        column 
        style={{
          padding: !mobile
            ? 'calc(var(--index) * 1.5) calc(var(--index) * 2) 0 calc(var(--index) * 2)'
            : 'calc(var(--index) * 1.5) calc(var(--index) * 2)',
        }}>
        {mobile ? (
          <img
            style={{
              width: mobile ? 'calc(var(--index) * 19)' : 'calc(var(--index) * 15)',
              marginTop: 'calc(var(--index) * 1)',
              marginBottom: mobile ? 'calc(var(--index) * 2)' : '',
            }}
            src={'card.png'}
            alt={'card'}
          />
        ) : (
          ''
        )}
        <Grid between centerY style={{ height: 'auto' }}>
          <Text>Vider</Text>
          {mobile ? '' : <Text style={{ fontWeight: 'bold' }}>TBA</Text>}
        </Grid>
        {!mobile ? (
          <img style={{ width: 'calc(var(--index) * 15)', marginTop: 'calc(var(--index) * 1)' }} src={'card.png'} alt={'card'} />
        ) : (
          ''
        )}
        <div
          style={{
            width: mobile ? 'calc(var(--index) * 19)' : 'calc(var(--index) * 15)',
            margin: mobile ? 'calc(var(--index) * 1.5) 0' : 0,
            height: '1px',
            background: 'gray',
          }}
        />
        <Grid column={mobile} centerY between>
          <Button
            style={{
              margin: mobile ? 'calc(var(--index) * 2) 0 calc(var(--index) * 1) 0' : 0,
              height: mobile ? 'calc(var(--index) * 5' : 'auto',
              width: '100%',
            }}
            primary>
              
              Mint
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
