import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface GridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;

  className?: string;

  column?: boolean;
  reverse?: boolean;
  between?: boolean;
  around?: boolean;

  autoX?: boolean;

  onStart?: boolean;
  onEnd?: boolean;

  centerY?: boolean;
  centerX?: boolean;

  wrap?: boolean;
}
