import { DownloadAppProps } from './DownloadApp.props';

import styles from './DownloadApp.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import useMobile from '../../../hooks/useMobile';

export const DownloadApp = ({ ...props }: DownloadAppProps): JSX.Element => {
  const { link } = styles;
  const mobile = useMobile();
  const baseUrl = process.env.BASE_URL

  return (
    <div id={'about'} {...props}>
      <Grid>
        <Grid column style={{ width: !mobile ? '50%' : '100%' }}>
          <Text heading3 gradient style={{ marginBottom: mobile ? 'calc(var(--index) * 2 )' : '' }}>
            Ignite your passion for riding
          </Text>
          <Grid
            column={mobile}
            style={{
              position: mobile ? 'absolute' : 'relative',
              top: mobile ? 'calc(var(--index) * 22)' : '',
              right: mobile ? '0' : '',
              width: mobile ? '48%' : '',
            }}>
            <a className={link} href="">
              <img 
                style={{ width: mobile ? 'calc(var(--index) * 12)' : '', marginBottom: mobile ? 'calc(var(--index) * 1)' : '' }}
                src={`${baseUrl}/google.svg`}
                alt=""
              />
            </a>
            <a className={link} href="">
              <img style={{ width: mobile ? 'calc(var(--index) * 12)' : '' }} src={`${baseUrl}/store.svg`} alt="" />
            </a>
          </Grid>
          <Grid
            centerX
            centerY
            style={{
              position: 'absolute',
              left: !mobile ? 'calc(var(--index) * 17)' : 'calc(var(--index) * -8)',
              paddingTop: !mobile ? 'calc(var(--index) * 8 )' : 'calc(var(--index) * 24 )',
            }}>
            <img className='aboutimg' style={{ width: 'calc(var(--index) * 22 )' }} src={`${baseUrl}/phone.png`} alt={'phone'} />
            <div
              style={{
                width: '50%',
                position: 'absolute',
                left: !mobile ? '80%' : '77%',
                bottom: mobile ? 'calc(var(--index) * 5 )' : 'calc(var(--index) * -5)',
              }}>
              <Text className='textAPP'>
                Vider is the leading cycling-oriented Move to Earn app that allows you to increase your physical endurance while earning real cash
              </Text>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
