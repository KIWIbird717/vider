import { SliderProps } from './Slider.props';

import styles from './Slider.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';

export const Slider = ({ ...props }: SliderProps): JSX.Element => {
  return (
    <Grid column {...props}>
      Hello
    </Grid>
  );
};
