import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface PhaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  top: string;
  left: string;
  phase: string;
  phaseNum: string;
  data: string;
  text: ReactElement;
}
