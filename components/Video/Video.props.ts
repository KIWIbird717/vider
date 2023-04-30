import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface VideoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;

  centerY?: boolean;
  centerX?: boolean;
}
