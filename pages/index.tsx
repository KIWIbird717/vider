import { withLayout } from '../layout/Layout';

import { Grid } from '../components/Atoms/Grid/Grid';
import { Footer } from '../layout/Footer/Footer';
import { Faq } from '../components/Sections/Faq/Faq';
import { DownloadApp } from '../components/Sections/DownloadApp/DownloadApp';
import { RoadMap } from '../components/Sections/RoadMap/RoadMap';
import { Team } from '../components/Sections/Team/Team';
import { Video } from '../components/Video/Video';
import { Loader } from '../components/Atoms/Loader/Loader';
import useMobile from '../hooks/useMobile';
import { Collection } from '../components/Sections/Collection/Collection';
import { Text } from '../components/Atoms/Text/Text';

function Home(): JSX.Element {
  const mobile = useMobile();
  const baseUrl = process.env.BASE_URL

  return (
    <Grid column>
                <Loader/>
      <Video>Hello World</Video>
      <Grid className='backmodul' style={{ padding: 'calc(var(--index) * 3) 0', zIndex: 15 }}>
        <Grid column>
          <Collection />

          <RoadMap />

          { <Team link={false} /> }

          <DownloadApp
            style={{
              padding: !mobile
                ? 'calc(var(--index) * 7) calc(var(--index) * 5)'
                : ' calc(var(--index) * 12) calc(var(--index) * 2) calc(var(--index) * 20) calc(var(--index) * 2)',
            }}
          />

          <div className='partners'>
            <Text heading3 gradient>
            Powered by
           </Text>
           <div className='partnersimg'>
              <img src={`${baseUrl}/logoimg/logo1.png`} />
              <img src={`${baseUrl}/logoimg/logo2.png`} />
              <img src={`${baseUrl}/logoimg/logo3.png`} />
           </div>
          </div>
          
          <Faq
            style={{
              padding: !mobile
                ? 'calc(var(--index) * 10) calc(var(--index) * 5)'
                : 'calc(var(--index) * 10) calc(var(--index) * 2)',
            }}
          />

          <div style={{ width: '100%', height: '1px', background: 'white', opacity: 0.2 }} />
            
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withLayout(Home);
