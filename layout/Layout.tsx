import { FunctionComponent, useEffect } from 'react';

import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Grid } from '../components/Atoms/Grid/Grid';
import { Loader } from '../components/Atoms/Loader/Loader';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Grid column>
      <Header style={{ position: 'fixed' }} />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
