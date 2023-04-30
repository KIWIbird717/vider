import { TextProps } from './Text.props';

import styles from './Text.module.scss';

const { h1, h3, h4, b1, b2, b3, gr, bd, upp, primaryColor } = styles;

export const Text = ({
  heading1,
  heading3,
  heading4,
  body1,
  body2,
  body3,
  bold,
  uppercase,
  noSelect,
  gradient,
  primary,
  children,
  ...props
}: TextProps): JSX.Element => {
  return (
    <div
      className={`
        ${heading1 ? h1 : ''}
        ${body1 ? b1 : ''}
        ${body2 ? b2 : ''}
        ${body3 ? b3 : ''}
        ${heading3 ? h3 : ''}
        ${heading4 ? h4 : ''}
        ${gradient ? gr : ''}
        ${bold ? bd : ''}
        ${uppercase ? upp : ''}
        ${noSelect ? 'noSelect' : ''}
        ${primary ? primaryColor : ''}
        `.replace(/\s\s+/g, ' ')}
      {...props}>
      {children}
    </div>
  );
};
