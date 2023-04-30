import { VideoProps } from './Video.props';

import styles from './Video.module.scss';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Grid } from '../Atoms/Grid/Grid';
import { StartCollection } from '../Sections/StartCollection/StartCollection';
import { Text } from '../Atoms/Text/Text';


export const Video: FC<VideoProps> = ({ ...props }) => {
  const video = useRef<HTMLVideoElement>(null);
  const baseUrl = process.env.BASE_URL

  const [scroll, setScroll] = useState<number>(0);
  const [margin, setMargin] = useState<number>(40);

  const Video = ({ children }: VideoProps): JSX.Element => {
    return (
      <Grid column>
        <Grid>{children}</Grid>
      </Grid>
    );
  };

  const handleScroll = () => {
    setScroll(window.scrollY / 100);

    if (window.scrollY / 25 > 40) {
      setMargin(0);
    } else {
      setMargin(Math.round(40 - window.scrollY / 25));
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (Number(scroll) < 1800) {
        handleScroll();
      }
    });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadedData = () => {
    console.log('loaded');
    localStorage.setItem('loading', 'true');
  };

  useMemo(() => {
    if (video.current) {
      video.current.currentTime = scroll;
    }
  }, [scroll]);

  return (
    <div className={styles.wrappe} {...props}>
      <Grid
        autoX
        style={{
          background: '#0f0f0f',
          height: '100vh',
          position: 'fixed',
          width: `40%`,
          right: `${margin - 40}%`,
          zIndex: 40,
        }}>
        <div
          style={{
            position: 'absolute',
            right: `calc(var(--index) * ${margin - 13})`,
            top: 'calc(var(--index) * 5)',
          }}>
          <Text style={{ fontSize: 'calc(var(--index) * 10)', fontWeight: 'normal', opacity: '20%' }} heading3>
            Vider
          </Text>
          <Text style={{ fontSize: 'calc(var(--index) * 3)', left: '2%', fontWeight: 'normal', opacity: '100%' }} heading3>
            WHAT IS VIDER?
          </Text>

          <Text
            style={{
              fontSize: 'calc(var(--index) * 1)',
              top: '1vw',
              width: '60%',
              left: '2%',
              fontWeight: 'normal',
              opacity: '100%',
            }}>
            Vider is a Web3 lifestyle app with Move2Earn elements. Players who own an NFT can ride a bike on the street and earn
            VIDs. These can be used to level up or mint a new bike
          </Text>
        </div>
        <StartCollection />
      </Grid>

      <div className={styles.video} style={{ background: '#0f0f0f', left: `-${margin}%` }}>
        <video  className={'video'} src={`${baseUrl}/hero.mp4` } loop autoPlay muted  playsInline webkit-playsinline id={'video'} onLoadedData={() => loadedData()}>
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.scroller} style={{ height: 'calc(var(--index) * 120' }} />
    </div>
  );
};
