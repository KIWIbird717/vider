import { HeaderProps } from './Header.props';
import { Grid } from '../../components/Atoms/Grid/Grid';
import { Menu } from '../../components/Features/Menu/Menu';

import styles from './Header.module.scss';
import Link from 'next/link';
import useMobile from '../../hooks/useMobile';
import { Socials } from '../../components/Features/Socials/Socials';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const mobile = useMobile();
  const baseUrl = process.env.BASE_URL

  return (
    <div id='header' className={`${styles.header} noSelect`} {...props}>
      <Grid between>
        <Link href={'/'}>
          <div className={styles.logo}>
            <img src={`${baseUrl}/logo.png`} alt={'logo'} />
          </div>
        </Link>

        {mobile ? undefined : <Menu />}

        {mobile ? (
          <div style={{ }}>
          <Socials />
        </div>
        ) : (
          <div className='socialsheader'>
            <Socials />
          </div>
        )}
      </Grid>
    </div>
  );
};
