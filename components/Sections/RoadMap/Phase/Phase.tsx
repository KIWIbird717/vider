import { PhaseProps } from './Phase.props';

import { Grid } from '../../../Atoms/Grid/Grid';
import { Text } from '../../../Atoms/Text/Text';

export const Phase = ({ left, top, phase, phaseNum, data, text, ...props }: PhaseProps): JSX.Element => {
  const baseUrl = process.env.BASE_URL

  return (
    <div {...props}>
      <Grid autoX>
        <img style={{ width: 'calc(var(--index) * 2)', zIndex: 15 }} src={`${baseUrl}/roadmap/point.svg`} alt={'point'} />
        <Grid
          column
          style={{
            width: 'calc(var(--index) * 20)',
            top: `${top}`,
            left: `${left}`,
            position: 'absolute',
          }}>
          <Grid centerY>
            <Text heading4 primary>
              {phase}
            </Text>
            <Grid
              column
              style={{ paddingTop: 'calc(var(--index) * 0.5)', margin: 'calc(var(--index) * 1 ) calc(var(--index) * 0.5) ' }}>
              <Text body3 bold>
                {phaseNum}
              </Text>
              <Text body1>{data}</Text>
            </Grid>
          </Grid>
          <Grid style={{ paddingTop: 'calc(var(--index) * 0.5)' }}>
            <Text body1>{text}</Text>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
