import { AccordionPuzzleProps } from './AccordionPuzzle.props';

import styles from './AccordionPuzzle.module.scss';
import { Grid } from '../../../Atoms/Grid/Grid';
import { Text } from '../../../Atoms/Text/Text';
export const AccordionPuzzle = ({ title, text, ...props }: AccordionPuzzleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const { accordionPuzzle, line, plus, puzzleActive, info, wrapper } = styles;

  return (
    <div className={`${accordionPuzzle} ${isOpen ? puzzleActive : ''}`}>
      <Grid column onClick={() => setIsOpen(!isOpen)} {...props}>
        <div style={{ padding: 'calc(var(--index) * 0.8) calc(var(--index) * 1)' }} className={wrapper}>
          <Grid between centerY>
            <Text heading1 noSelect>
              {title}
            </Text>
            <Grid centerX centerY style={{ width: 'calc(var(--index) * 1)' }}>
              <div className={line} />
              <div className={`${line} ${isOpen ? '' : plus}`} />
            </Grid>
          </Grid>
          <div className={info}>
            <Text
              style={{
                paddingTop: 'calc(var(--index) * 1)',
                paddingBottom: 'calc(var(--index) * 0.5)',
                paddingRight: 'calc(var(--index) * 2)',
              }}
              body1
              noSelect>
              {text}
            </Text>
          </div>
        </div>
      </Grid>
    </div>
  );
};

import { useState } from 'react';
