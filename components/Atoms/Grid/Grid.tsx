import { GridProps } from './Grid.props';

import styles from './Grid.module.scss';

export const Grid = ({
  className,
  centerX,
  centerY,
  column,
  reverse,
  between,
  around,
  children,
  onStart,
  onEnd,
  autoX,
  wrap,
  ...props
}: GridProps): JSX.Element => {
  return (
    <div
      className={`
      ${styles.grid}
      ${centerX ? styles.centerX : ''}
      ${centerY ? styles.centerY : ''}
      ${autoX ? styles.widthAuto : styles.widthFull}
      ${column ? styles.column : ''}
      ${reverse ? styles.columnReverse : ''}
      ${between ? styles.between : ''}
      ${around ? styles.around : ''}
      ${onStart ? styles.start : ''}
      ${onEnd ? styles.end : ''}
      ${wrap ? styles.wrap : ''}
      ${className}
      `.replace(/\s\s+/g, ' ')}
      {...props}>
      {children}
    </div>
  );
};
