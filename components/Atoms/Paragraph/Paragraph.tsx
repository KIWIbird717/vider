import { ParagraphProps } from './Paragraph.props';

import styles from './Paragraph.module.scss';

import { Grid } from '../Grid/Grid';
import { Text } from '../Text/Text';
import useMobile from '../../../hooks/useMobile';

export const Paragraph = ({ num, text, ...props }: ParagraphProps): JSX.Element => {
  const { paragraph, point, triangle } = styles;
  const mobile = useMobile();
  return (
    <Grid autoX {...props}>
      <div
        className={paragraph}
        style={{
          width: !mobile ? 'calc(var(--index) * 14)' : 'calc(var(--index) * 26.5)',
          height: !mobile ? 'calc(var(--index) * 4)' : 'calc(var(--index) * 6)',
        }}>
        <div className={triangle} />
        <div
          className={point}
          style={{
            width: mobile ? 'calc(var(--index) * 2)' : 'calc(var(--index) * 1)',
            height: mobile ? 'calc(var(--index) * 2)' : 'calc(var(--index) * 1)',
          }}>
          <Text heading3 style={{ fontSize: mobile ? 18 : 24 }}>
            {num}
          </Text>
        </div>
        <Text style={{ width: '70%', height: '60%', paddingTop: mobile ? '' : '8px' }} body3={!mobile} body1={mobile}>
          {text}
        </Text>
      </div>
    </Grid>
  );
};
