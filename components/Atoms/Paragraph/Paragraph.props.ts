import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  num: string;
  text: string;
}
