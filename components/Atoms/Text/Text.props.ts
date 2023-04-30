import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;

  heading1?: boolean;
  heading2?: boolean;
  heading3?: boolean;
  heading4?: boolean;

  body1?: boolean;
  body2?: boolean;
  body3?: boolean;

  bold?: boolean;
  uppercase?: boolean;

  noSelect?: boolean;

  gradient?: boolean;
  primary?: boolean;
}
