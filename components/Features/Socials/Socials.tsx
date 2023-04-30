import { SocialsProps } from './Socials.props';

import styles from './Socials.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';
import { useEffect, useState } from 'react';
import { SwiperComponent } from 'swiper/types/shared';

const baseUrl = process.env.BASE_URL

const socials = [
  {
    icon: baseUrl + '/socials/instagram.svg',
    href: '',
    name: 'instagram',
  },
  {
    icon: baseUrl + '/socials/twitter.svg',
    href: '',
    name: 'twitter',
  },
  {
    icon: baseUrl + '/socials/discord.svg',
    href: '',
    name: 'dicord',
  },
];

export const Socials = ({ ...props }: SocialsProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [slider, setSlider] = useState<SwiperComponent>();
  useEffect(() => {
    console.log('mounted');
    setMounted(true);
  }, []);

  return (
    <Grid {...props}>
      {socials.map(({ icon, href, name }) => {
        return (
          <a href={href} target="_blank" key={name}>
            <img className={styles.socials} src={icon} alt={name} key={name} />
          </a>
        );
      })}
    </Grid>
  );
};
