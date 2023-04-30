import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TeamProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    link: boolean;
}
