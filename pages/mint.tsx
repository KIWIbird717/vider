import { withLayout } from '../layout/Layout';
import { Grid } from '../components/Atoms/Grid/Grid';
import { Footer } from '../layout/Footer/Footer';
import { Instruction } from '../components/Sections/Instruction/Instruction';
import useMobile from '../hooks/useMobile';

function Mint(): JSX.Element {
  const mobile = useMobile();
  return (
    <Grid column>
      <Grid style={{ background: '#0f0f0f', height: mobile ? '' : '10vh' }}>
        <div />
      </Grid>
      <Grid style={{ background: '#0f0f0f', padding: 'calc(var(--index) * 5) 0', zIndex: 15 }}>
        <Instruction style={{ padding: !mobile ? '0 calc(var(--index) * 5)' : '0 calc(var(--index) * 2.5)', width: '100%' }} />
      </Grid>
      <Grid style={{ background: '#0f0f0f', padding: 'calc(var(--index) * 3) calc(var(--index) * 5)', zIndex: 15 }}>
        <Grid column>
          <div style={{ width: '100%', height: '1px', background: 'white', opacity: 0.2 }} />
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withLayout(Mint);
