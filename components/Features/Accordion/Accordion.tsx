import { AccordionProps } from './Accordion.props';

import styles from './Accordion.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';

export const Accordion = ({ children, ...props }: AccordionProps): JSX.Element => {
  return (
    <Grid column {...props}>
      {children}
    </Grid>
  );
};
