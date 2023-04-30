import { InstructionProps } from './Instruction.props';
import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import { Paragraph } from '../../Atoms/Paragraph/Paragraph';

import useMobile from '../../../hooks/useMobile';
import { Card } from '../../Features/Card/Card';

const inst = [
  {
    num: '1',
    text: 'Connect your Phantom wallet to our website',
  },
  {
    num: '2',
    text: 'Choose the number of NFTs and click mint',
  },
  {
    num: '3',
    text: 'Approve your transaction first and then click again to buy',
  },
  {
    num: '4',
    text: 'Check your NFT(s) in the Your collectibles section',
  },
];

export const Instruction = ({ ...props }: InstructionProps): JSX.Element => {
  const mobile = useMobile();

  return (
    <div style={{ background: '#0f0f0f', width: '100%' }} {...props}>
      <Grid className={'noSelect'} column={mobile} reverse={mobile} between centerY>
        <Grid between column centerY={mobile}>
          <Grid style={{ width: mobile ? 'calc(var(--index) * 26.5)' : '' }}>
            <Text body3 style={{ fontWeight: 'bold', marginBottom: 'calc(var(--index) * 2.5)' }}>
              Instructions for minting NFTs:
            </Text>
          </Grid>
          <Grid
            style={{ width: mobile ? '100%' : 'calc(var(--index) * 28.5)', height: '100%' }}
            wrap
            between
            centerY={mobile}
            column={mobile}>
            {inst.map(({ num, text }, index) => {
              return (
                <Paragraph
                  num={num}
                  text={text}
                  style={{
                    marginTop: !mobile
                      ? index % 2 !== 0
                        ? 'calc(var(--index) * 4.3)'
                        : ''
                      : index == 2
                      ? 'calc(var(--index) * 3)'
                      : 'calc(var(--index) * 1.7)',
                  }}
                  key={index}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid onEnd={!mobile} centerX={mobile} style={{ margin: '50px' }}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};
