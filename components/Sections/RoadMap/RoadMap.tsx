import { RoadMapProps } from './RoadMap.props';

import { Text } from '../../Atoms/Text/Text';
import { Grid } from '../../Atoms/Grid/Grid';
import { Phase } from './Phase/Phase';


export const RoadMap = ({ ...props }: RoadMapProps): JSX.Element => {
  const baseUrl = process.env.BASE_URL

  return (
    <div id={'roadmap'} {...props}>
      <Grid centerY style={{ padding: 'calc(var(--index) * 8) calc(var(--index) * 5)', overflow: 'hidden' }}>
        <Grid style={{ top: 'calc(var(--index) * 5)', position: 'absolute' }}>

          <Text heading3 gradient>
            Roadmap
          </Text>
        </Grid>
        <Grid
          centerX
          style={{
            width: 'calc(var(--index) * 70)',
            left: 'calc(var(--index) * -3)',
          }}>
          <Grid>
            <div className='imgroad1'>
              <img className='imgroad11'
                src={`${baseUrl}/roadmap/road.svg`}
                alt={'road'}
              />
              <img className='imgroad2'
                src={`${baseUrl}/roadmap/road-line.svg`}
                alt={'road-line'}
              />
              <img className='stikerimg' 
                src={`${baseUrl}/roadmap/stiker.png`}
                alt={'stiker'}
              />
            </div>

            <Phase className='roadblock1'
              top={'calc(var(--index) * 5)'}
              left={'calc(var(--index) * 3)'}
              phase={'1'}
              phaseNum={'Phase one'}
              data={'Q2'}
              text={
                <Text className='roadtext1' style={{ fontSize: '150%' }}>
                  - Discord server live <br />
                  - Social Media launch <br />
                  - Light paper release <br />
                  - Team building <br />
                </Text>
              }
            />
            <Phase className='roadblock2'
              top={'calc(var(--index) * 5)'}
              left={'calc(var(--index) * 5)'}
              phase={'2'}
              phaseNum={'Phase Two'}
              data={'Q3'}
              text={
                <Text className='roadtext1' style={{ fontSize: '150%' }}>
                  - Website live <br />
                  - Whitepaper release <br />
                  - NFT Mint 1 <br />
                </Text>
              }
            />
            <Phase className='roadblock3'
              top={'9vw'}
              left={'calc(var(--index) * 2)'}
              phase={'3'}
              phaseNum={'Phase Three'}
              data={'Q4 – Q1 next year'}
              text={
                <Text className='roadtext1' style={{ fontSize: '150%' }}>
                  - Strategic partnerships <br />
                  - NFT Stacking <br />
                  - NFT mint 2<br/>
                  - NFT mint 3<br/> 
                  
                </Text>
              }
            />
            <Phase className='roadblock4'
              top={'calc(var(--index) * 3)'}
              left={'calc(var(--index) * -12)'}
              phase={'4'}
              phaseNum={'Phase Four'}
              data={'Q2-Q3 next year'}
              text={
                <Text className='roadtext1' style={{ fontSize: '150%' }}>
                  - Token public pre-sale<br />
                  - Token DEX/ Exchange listing <br />
                  - Mobile app public alpha release <br />
                  - Mobile app beta launch <br />
                  - In-app marketplace launch <br />
                  - Wallet upgrade <br />
                  - Full app launch <br />
                  - Collaboration with cycling athletes <br />
                </Text>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
