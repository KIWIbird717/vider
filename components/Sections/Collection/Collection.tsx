import React, { useState } from 'react';
import { CollectionProps } from './Collection.props';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import styles from './Collection.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import useMobile from '../../../hooks/useMobile';

const baseUrl = process.env.BASE_URL

const slides = [
  {
    image: '1',
  },
  {
    image: '2',
  },
  {
    image: '3',
  },
  {
    image: '4',
  },
  {
    image: '5',
  },
  {
    image: '6',
  },
  {
    image: '7',
  },
];

export const Collection = ({ ...props }: CollectionProps): JSX.Element => {
  const [active, setActive] = useState(Math.round(slides.length / 2));

  function slideChange(slider) {
    if (slider) {
      setActive(slider.realIndex);
    }
  }

  const mobile = useMobile();

  const loadedData = () => {
    console.log('loaded');
    localStorage.setItem('loading', 'true');
  };

  return (
    <div
      id={'collection'}
      style={{ marginBottom: !mobile ? 'calc(var(--index) * 2)' : 'calc(var(--index) * 3)' }}
      className={styles.carousel}
      {...props}>
      <div>
      <Grid between style={{ padding: !mobile ? '0 calc(var(--index) * 5)' : '0 calc(var(--index) * 2)' }}>
          <Text heading3 gradient>
            Collection
          </Text>
        </Grid>
      </div>

      <Swiper
        spaceBetween={!mobile ? -250 : 40}
        slidesPerView={2}
        centeredSlides
        initialSlide={active}
        slideToClickedSlide
        onSlideChange={(e) => slideChange(e)}>
        {slides.map(({ image }, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 300ms ease-in-out',
                opacity: active === index ? 1 : 0.4,
              }}>
              <Grid column centerX centerY style={{ width: '100%' }}>
                <img id={'video'} onLoadedData={() => loadedData()} className='imgcollection' 
                  style={{
                    transform: active === index ? 'scale(0.7)' : 'scale(0.4)',
                  }}
                  src={`${baseUrl}/collectionbike/${image}.png`}
                  alt={`Bicycle Image`}
                />
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
