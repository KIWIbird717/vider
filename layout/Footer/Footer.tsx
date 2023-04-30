import { FooterProps } from './Footer.props';
import { Grid } from '../../components/Atoms/Grid/Grid';
import { Text } from '../../components/Atoms/Text/Text';
import useMobile from '../../hooks/useMobile';
import styles from '../Header/Header.module.scss';
import Link from 'next/link';
import { Menu } from '../../components/Features/Menu/Menu';
import { Socials } from '../../components/Features/Socials/Socials';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  const mobile = useMobile();
  const baseUrl = process.env.BASE_URL

  return (
    <div>
      <Grid style={{ textAlign: 'center' }} {...props}>
        <div className={styles.header} {...props}>
          <Grid centerX column={mobile} centerY={mobile}>
            <Link href={'/'}>
              <div className={styles.logo}>
                <img src={`${baseUrl}/logo.png`} alt={`logo`} />
              </div>
            </Link>
            {mobile ? undefined : <Menu />}
            <div style={{ margin: 'calc(var(--index) * 1) 0' }}>
              <Socials />
            </div>
            {mobile ? <Menu column /> : undefined}
          </Grid>
        </div>
      </Grid>
      <Grid column={mobile} around centerY>
        <Text body1 style={{ opacity: 0.5 }}>
          © 2022 VIDER. All rights reserved
        </Text>
        <Text body1 style={{ opacity: 0.5, margin: mobile ? 'calc(var(--index) * 1) 0' : '' }}>
          Privacy policy
        </Text>
        <Text body1 style={{ opacity: 0.5 }}>
          Term & Condition
        </Text>
      </Grid>
    </div>
  );
};
