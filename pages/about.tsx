import { withLayout } from '../layout/Layout';
import { Grid } from '../components/Atoms/Grid/Grid';

function Home(): JSX.Element {
  return (
    <Grid>
      <Grid column centerX centerY>
        Hello
      </Grid>
    </Grid>
  );
}

export default withLayout(Home);
