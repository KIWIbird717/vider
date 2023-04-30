import React from 'react';
import { TeamProps } from './Team.props';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import styles from './Team.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import useMobile from '../../../hooks/useMobile';

const slides = [
  {
    name: 'NON',
    link: '' ,
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
  {
    name: 'NON',
    role: 'NON',
  },
];
let slider;

export const Team = ({ ...props }: TeamProps): JSX.Element => {
  const mobile = useMobile();
  const baseUrl = process.env.BASE_URL

  return (
    <div id={'team'} className={styles.carousel} {...props}>
      <div style={{ padding: 'calc(var(--index) * 5) 0' }}>
        <Grid between style={{ padding: !mobile ? '0 calc(var(--index) * 5)' : '0 calc(var(--index) * 2)' }}>
          <Text heading3 gradient>
            Team
          </Text>

          <Grid autoX>
            <img
              onClick={() => slider.slidePrev()}
              className={`${styles.button} ${styles.invert}`}
              src={`${baseUrl}/slider-button.svg`}
              alt="Slider Prev"
            />

            <img onClick={() => slider.slideNext()} className={styles.button} src={`${baseUrl}/slider-button.svg`} alt="Slider Next" />
          </Grid>
        </Grid>
      </div>

      <Swiper
        onInit={(swiper) => {
          slider = swiper;
        }}
        spaceBetween={mobile ? 160 : 20}
        slidesPerView={3}
        initialSlide={1}
        centeredSlides
        slideToClickedSlide
        onSlideChange={() => console.log('slide change')}>
        {slides.map(({ name, role, link, }, index) => {
          return (
            <SwiperSlide key={index} style={{ left: '-25vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid column centerX centerY style={{ width: '90%', textAlign: 'center' }}>
                <img
                  style={{
                    width: !mobile ? '100%' : 'calc(var(--index) * 12)',
                    marginBottom: 'calc(var(--index) * 1)',
                  }}
                  src={`${baseUrl}/team/${name.toLowerCase().replace(' ', '-')}.png`}
                  alt={`${name} image`}
                />
                <Text body3 bold uppercase style={{ fontSize: '150%' }}>
                  {name}
                </Text>
                <Text body3 bold uppercase style={{ fontSize: '150%' }}>
                  {link}
                </Text>
                <Text body2 uppercase style={{ fontSize: '90%', width: '20vw' }}>
                  {role}
                </Text>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
