import { FaqProps } from './Faq.props';

import { Grid } from '../../Atoms/Grid/Grid';
import { Text } from '../../Atoms/Text/Text';
import { Accordion } from '../../Features/Accordion/Accordion';
import { AccordionPuzzle } from '../../Features/Accordion/AccordionPuzzle/AccordionPuzzle';
import useMobile from '../../../hooks/useMobile';

const faq = [
  {
    title: 'What is Vider ?!',
    text: 'Vider is a Move2Earn mobile app. We aim to shape an active lifestyle, introduce millions of people to Web 3.0 and ignite a passion for cycling.',
  },
  {
    title: 'Is Vider an NFT project?',
    text: 'No, it is a Move2Earn project. The users need to buy initially an NFT to be able to play. Afterwards they can ride and earn VID tokens. In addition, new NFT bikes can be created by crossing 2 existing NFTs.',
  },
  {
    title: 'How does Vider work?',
    text: 'Users need a bike, our installed app on the phone and a purchased NFT bike inside the app. The users will be able to earn VID when they ride their bike. VID can be sold for SUI, USDT or VIK (our governance token) on exchanges and in our app. Moreover, players can burn VID to upgrade or mint new bikes.',
  },
  {
    title: 'What is the total supply for NFTs?',
    text: 'We plan to mint initially 5555 NFTs. We might organize also a second NFT mint in the next quarter (TBA). However, in the app each user will be able to mint a new NFT by crossing two existing ones. So, the supply is purely dependent on the demand of the market.',
  },
  {
    title: 'Can I walk or run and earn VIDs?',
    text: 'No, our app is designed exclusively for riding bikes. We are working on a complex system that uses GPS, motion sensors and artificial intelligence to fight against cheating.',
  },
  {
    title: 'Who is behind Vider?',
    text: 'Vider is created by an independent team of crypto enthusiasts and developers with more than 10 years in this space.',
  },
  {
    title: 'Where can I buy NFT bikes?',
    text: 'Our mint event will take place at the end of Q2. You can get whitelisted and mint NFTs on our website. The NFTs will be available on Sea market place soon after the mint. Alternatively, the NFTs will be available to be bought in our in-app marketplace.',
  },
  {
    title: 'Do you do NFT bikes airdrops?',
    text: 'Currently we give away many spots to get whitelisted for our upcoming mint. After the mint, we will also organize giveaways.',
  },
  {
    title: 'When and where the NFT mint will take place?',
    text: 'At the end of Q2 on our website which is under construction.',
  },
  {
    title: 'What is VID?',
    text: 'VID tokens are minted and burned on a regular basis by users as they ride or lease their NFT bikes. They are also used to improve and mint new NFT bikes.',
  },
  {
    title: 'What is VIK?',
    text: 'VIK is the governance token of our ecosystem. Players stake VIK to vote on how the company’s treasure profit is distributed. When users trade, lease, or mint NFT bikes, a percentage of tax is deducted. The Vider treasury receives these taxes.',
  },
  {
    title: 'When is the ICO and the DEX/ Exchange listing?',
    text: 'We are working on a public ICO in the beginning of Q3. Shorty we will list our token on a couple of exchanges.',
  },
  {
    title: 'What kind of competition Vider will organize?',
    text: 'Vider plans to organize a cycling competition by using our app with a prize pool of 500 SUI. Users will be tested on their riding skills (speed, cornering, descending, etc.) and the better they perform, the higher their prize. More details TBA.',
  },
];

export const Faq = ({ ...props }: FaqProps): JSX.Element => {
  const mobile = useMobile();
  return (
    <Grid id={'faq'} column={mobile} style={{ padding: 'calc(var(--index) * 1.5)' }} {...props}>
      <Grid style={{ width: '30%', marginBottom: mobile ? 'calc(var(--index) * 2)' : '' }}>
        <Text heading3>FAQ</Text>
      </Grid>
      <Grid style={{ width: mobile ? '100%' : '70%' }}>
        <Accordion>
          {faq.map(({ title, text }) => {
            return (
              <div key={title}>
                <div style={{ width: '100%', height: '1px', background: '#272727', opacity: 70 }} />
                <AccordionPuzzle style={{ padding: `calc(var(--index) * 0.6)` }} title={title} text={text} />
              </div>
            );
          })}

          <div style={{ width: '100%', height: '1px', background: '#272727', opacity: 70 }} />

        </Accordion>
      </Grid>
    </Grid>
  );
};
